require("dotenv").config()
const http = require("http")
const path = require("path")
const express = require("express")
const wip = require("./wip/wip")
const books = require("./books/books")


const app = express()

app.use("/wip", wip);
app.use("/books", books);
app.use(express.static("./public"));

app.get("/", (req, res) => {
    console.log("user hit the resource")
    res.status(200).sendFile(path.resolve(__dirname, './index.html'))
})

app.all("*", (req, res) => {
    res.status(404).send("Resource not found :(")
})
app.listen(3000, () => {
    console.log("server is listening on port 3000...")
})