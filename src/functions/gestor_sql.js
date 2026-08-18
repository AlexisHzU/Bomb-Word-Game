
import * as SQLite from "expo-sqlite";
import { random_num } from "./random.js";
//import words from "../functions/backup/words.json";

//TABLE NAMES IS ENGLISH AND SPANISH (Equal form you need traduce words to palabras for SPANISH lenguage)

const db = SQLite.openDatabaseSync("bomb_words");

export function create_table_WORDS(){
    const keys = Object.keys(words);
    
    //change english and letters, words for the equal lenguage you use it 
    //in backup you find a JSON with all info of lenguages available
    db.execSync(`
        CREATE TABLE IF NOT EXISTS english (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        letters TEXT NOT NULL,
        words TEXT NOT NULL
    )`
)
    
    for (var key of keys){
        db.runSync("INSERT INTO english (letters, words) VALUES (?, ?)",
            key,
            JSON.stringify(words[key])
        )
    };
    const row = db.getAllSync(`SELECT id, letters FROM english LIMIT 4;`)
    console.log(row)
    console.log("termino")
}

export function get_words(lenguage, letters, words){
    let id = db.getAllSync(`SELECT id FROM ${lenguage} ORDER BY id DESC LIMIT 1`)
    var obj = id[0]
    const random = random_num(obj["id"])
    
    let row = db.getAllSync(`SELECT id, ${letters}, ${words} FROM ${lenguage} WHERE id = ${random}`)
    row = row[0]
    
    row[words] = JSON.parse(row[words])
    return row
}

export function delete_table(){
    db.runSync(`DROP TABLE english;`)
}
