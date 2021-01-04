

#[derive(Debug)]
pub enum RwsError {
    Uknown,
    Custom(String),
    Sqlite(sqlite::Error)
}