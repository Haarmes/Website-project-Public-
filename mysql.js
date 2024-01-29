require("dotenv").config();
const mysql = require("mysql2");

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
});

let print_books = function(data){
    console.log(data)
}

const get_books = (cb) => {
    let get_books = "SELECT * FROM books"

    let books = pool.execute(get_books, (err, result)=>{
        console.log("1")
        return cb
})}

function main() {
    
    books = get_books(print_books())
    console.log("2")
    console.log(books)


    module.exports = pool.promise();}

main()