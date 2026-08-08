
import * as SQLite from "expo-sqlite";

const db = await SQLite.openDatabaseSync("bomb_words");

export function create_table_WORDS(){
    
    db.execSync(`
        CREATE TABLE IF NOT EXISTS  (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        words TEXT NOT NULL,
        palabras TEXT NOT NULL
        )`
    )
    
    db.runSync(`
        INSERT INTO words
        `)
    
    
}