
use tokio::sync::Mutex;
use no_proto::buffer::NP_Buffer;
use crate::root_storage::StorageCollection;
use crate::root_storage::KEY_FACTORY;
use crate::utils::RwsError;
use std::path::Path;
use super::RootServerStorage;
use sqlite::State;
use std::time::{SystemTime, UNIX_EPOCH};

pub struct SQLiteStore {
    db: Mutex<sqlite::Connection>
}

impl SQLiteStore {
    pub fn new<P: AsRef<Path>>(path: P) -> Result<Self, RwsError> {
        match sqlite::open(path) {
            Ok(db) => {
                db.execute(r#"
                    CREATE TABLE IF NOT EXISTS datastore (key TEXT PRIMARY KEY ON CONFLICT REPLACE, data BLOB);
                    CREATE TABLE IF NOT EXISTS sessions (id TEXT PRIMARY KEY ON CONFLICT REPLACE, expire INT, data TEXT);
                "#).unwrap();
                Ok(Self {
                    db: Mutex::new(db)
                })
            },
            Err(e) => {
                Err(RwsError::Sqlite(e))
            }
        }
    }

    pub fn get_key_str(buffer: NP_Buffer) -> String {
        let bytes = buffer.finish().bytes();
        String::from(unsafe { std::str::from_utf8_unchecked(&bytes[..]) })
    }
}



#[async_trait]
impl RootServerStorage for SQLiteStore {

    async fn get_session(&self, session_id: &str) -> Option<String> {

        let db = self.db.lock().await;
        let mut statement = db.prepare("SELECT data FROM sessions WHERE id = ?").unwrap();

        statement.bind(1, session_id).unwrap();

        if let State::Row = statement.next().unwrap() {
            Some(statement.read::<String>(0).unwrap())
        } else {
            None
        }
    }
    
    async fn clear_session(&mut self, session_id: &str) -> Result<(), RwsError> {
        let db = self.db.lock().await;
        let mut statement = db.prepare("DELETE FROM sessions WHERE id = ?").unwrap();
        statement.bind(1, session_id).unwrap();
        statement.next().unwrap();

        Ok(())
    }

    async fn put_session(&mut self, session_id: &str, value: String) -> Result<(), RwsError> {
   
        let db = self.db.lock().await;
        let mut statement = db.prepare("INSERT OR REPLACE INTO session(id, expire, data) VALUES (?, ?, ?);").unwrap();

        // 7 day session
        let start = SystemTime::now();
        let session_end_seconds = start
            .duration_since(UNIX_EPOCH)
            .expect("Time went backwards").as_secs() + (7 * 24 * 60 * 60);

        statement.bind(1, session_id).unwrap();
        statement.bind(2, session_end_seconds as i64).unwrap();
        statement.bind(3, value.as_str()).unwrap();

        match statement.next() {
            Ok(_k) => return Ok(()),
            Err(e) => return Err(RwsError::Sqlite(e))
        }
    }

    async fn get(&self, namespace: &str, key: &str) -> Option<Vec<u8>> {
        let mut key_buffer = (*KEY_FACTORY).new_buffer(None);
        key_buffer.set(&["0"], namespace).unwrap();   
        key_buffer.set(&["1"], key).unwrap();   

        let db = self.db.lock().await;
        let mut statement = db.prepare("SELECT data FROM datastore WHERE key = ?").unwrap();

        statement.bind(1, SQLiteStore::get_key_str(key_buffer).as_str()).unwrap();

        if let State::Row = statement.next().unwrap() {
            Some(statement.read::<Vec<u8>>(0).unwrap())
        } else {
            None
        }
    }

    async fn put(&mut self, namespace: &str, key: &str, value: Vec<u8>) -> Result<(), RwsError> {
        let mut key_buffer = (*KEY_FACTORY).new_buffer(None);
        key_buffer.set(&["0"], namespace).unwrap();   
        key_buffer.set(&["1"], key).unwrap();   
        let db = self.db.lock().await;
        let mut statement = db.prepare("INSERT OR REPLACE INTO datastore(key, data) VALUES (?, ?)").unwrap();

        statement.bind(1, SQLiteStore::get_key_str(key_buffer).as_str()).unwrap();
        statement.bind(2, &value[..]).unwrap();

        match statement.next() {
            Ok(_k) => return Ok(()),
            Err(e) => return Err(RwsError::Sqlite(e))
        }
    }

    async fn scan(&self, namespace: &str, from: &str, to: &str) -> StorageCollection {
        let mut low_buffer = (*KEY_FACTORY).new_buffer(None);
        low_buffer.set(&["0"], namespace).unwrap();   
        low_buffer.set(&["1"], from).unwrap();   

        let mut high_buffer = (*KEY_FACTORY).new_buffer(None);
        high_buffer.set(&["0"], namespace).unwrap();   
        high_buffer.set(&["1"], to).unwrap();  

        let high_key = SQLiteStore::get_key_str(high_buffer);

        let db = self.db.lock().await;
        let mut statement = db.prepare("SELECT * FROM datastore WHERE key <= ? AND key >= ? LIMIT 101;").unwrap();

        statement.bind(1, high_key.as_str()).unwrap();
        statement.bind(2, SQLiteStore::get_key_str(low_buffer).as_str()).unwrap();

        let mut result: Vec<(String, Vec<u8>)> = Vec::new();
        let mut count = 0;

        while let State::Row = statement.next().unwrap() {
            let key = statement.read::<String>(0).unwrap().as_bytes().to_vec();
            let data = statement.read::<Vec<u8>>(1).unwrap();

            if count < 101 {
                let key_buffer = (*KEY_FACTORY).open_buffer((&*key).to_vec());
                let key_value = key_buffer.get::<String>(&["1"]).unwrap().unwrap();
                result.push((key_value, data));
            }
            count += 1;
        }

        StorageCollection {
            values: result,
            namespace: String::from(namespace),
            has_more: count > 100,
            max_key: Some(high_key)
        }
    }

    async fn all(&self, namespace: &str) -> StorageCollection {
        let mut low_buffer = (*KEY_FACTORY).new_buffer(None);
        low_buffer.set_min(&[]).unwrap();
        low_buffer.set(&["0"], namespace).unwrap();   

        let db = self.db.lock().await;
        let mut statement = db.prepare("SELECT * FROM datastore WHERE key >= ? LIMIT 101;").unwrap();

        statement.bind(2, SQLiteStore::get_key_str(low_buffer).as_str()).unwrap();

        let mut result: Vec<(String, Vec<u8>)> = Vec::new();
        let mut count = 0;

        while let State::Row = statement.next().unwrap() {
            let key = statement.read::<String>(0).unwrap().as_bytes().to_vec();
            let data = statement.read::<Vec<u8>>(1).unwrap();

            if count < 101 {
                let key_buffer = (*KEY_FACTORY).open_buffer((&*key).to_vec());
                let key_value = key_buffer.get::<String>(&["1"]).unwrap().unwrap();
                result.push((key_value, data));
            }
            count += 1;
        }

        StorageCollection {
            values: result,
            namespace: String::from(namespace),
            has_more: count > 100,
            max_key: None
        }
    }

    async fn del(&mut self, namespace: &str, key: &str) -> Result<(), RwsError> {
        
        let mut key_buffer = (*KEY_FACTORY).new_buffer(None);
        key_buffer.set(&["0"], namespace).unwrap();   
        key_buffer.set(&["1"], key).unwrap();   
        let db = self.db.lock().await;
        let mut statement = db.prepare("DELETE FROM datastore WHERE key = ?").unwrap();

        statement.bind(1, SQLiteStore::get_key_str(key_buffer).as_str()).unwrap();

        match statement.next() {
            Ok(_k) => return Ok(()),
            Err(_e) => return Ok(())
        }
    }

    async fn next_values(&self, mut collection: StorageCollection) -> Option<StorageCollection> {

        if collection.has_more {
            
            let last_value = collection.values.pop().unwrap();

            let namespace = collection.get_namespace();

            let mut low_buffer = (*KEY_FACTORY).new_buffer(None);
            low_buffer.set(&["0"], namespace.as_str()).unwrap();   
            low_buffer.set(&["1"], last_value.0).unwrap();   

            let db = self.db.lock().await;
            let mut statement = if let Some(high_key) = &collection.max_key {
                let mut stmt = db.prepare("SELECT * FROM datastore WHERE key > ? AND key <= ? LIMIT 101;").unwrap();
                stmt.bind(1, SQLiteStore::get_key_str(low_buffer).as_str()).unwrap();
                stmt.bind(2, high_key.as_str()).unwrap();
                stmt
            } else {
                let mut stmt = db.prepare("SELECT * FROM datastore WHERE key > ? LIMIT 101;").unwrap();
                stmt.bind(1, SQLiteStore::get_key_str(low_buffer).as_str()).unwrap();
                stmt
            };

            let mut result: Vec<(String, Vec<u8>)> = Vec::new();
            let mut count = 0;
            while let State::Row = statement.next().unwrap() {

            let key = statement.read::<String>(0).unwrap().as_bytes().to_vec();
            let data = statement.read::<Vec<u8>>(1).unwrap();

                if result.len() < 100 {
                    let key_buffer = (*KEY_FACTORY).open_buffer((&*key).to_vec());
                    let key_value = key_buffer.get::<String>(&["1"]).unwrap().unwrap();
                    result.push((key_value, data));
                }

                count += 1;
            }

            Some(StorageCollection {
                namespace: String::from(namespace),
                values: result,
                has_more: count > 100,
                max_key: collection.max_key
            })
        } else {
            None
        }
    }
}