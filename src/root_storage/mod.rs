
use no_proto::NP_Factory;

use crate::utils::RwsError;

pub mod sqlite;

lazy_static! {
    /// This is an example for using doc comment attributes
    static ref KEY_FACTORY: NP_Factory<'static> = {
        NP_Factory::new(r#"{
            "type": "tuple", 
            "sorted": true, 
            "values": [
                {"type": "string", "size": 12, "for": "namespace"},
                {"type": "string", "size": 20, "for": "value"}
            ]
        }"#).unwrap()
    };
}

pub struct StorageCollection {
    namespace: String,
    pub values: Vec<(String, Vec<u8>)>,
    pub has_more: bool,
    pub max_key: Option<String>
}

impl StorageCollection {
    pub fn get_namespace(&self) -> String {
        self.namespace.clone()
    }
}

#[async_trait]
pub trait RootServerStorage {
    async fn get_session(&self, session_id: &str) -> Option<String>;
    async fn clear_session(&mut self, session_id: &str) -> Result<(), RwsError>;
    async fn put_session(&mut self, session_d: &str, value: String) -> Result<(), RwsError>;

    /// Get a value at the provided key
    async fn get(&self, namespace: &str, key: &str) -> Option<Vec<u8>>;
    /// Put a value at the provided key
    async fn put(&mut self, namespace: &str, key: &str, value: Vec<u8>) -> Result<(), RwsError>;
    /// Scan the database for the first 100 records in a given range
    async fn scan(&self, namespace: &str, from: &str, to: &str) -> StorageCollection;
    /// Get the first 100 records for a given namespace
    async fn all(&self, namespace: &str) -> StorageCollection;
    /// Get the next 100 values in a collection
    async fn next_values(&self, collection: StorageCollection) -> Option<StorageCollection>;
    /// Delete a value at the given key
    async fn del(&mut self, namespace: &str, key: &str) -> Result<(), RwsError>;
}
