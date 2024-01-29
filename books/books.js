const express = require("express");
let router = express.Router();
const path = require("path")


router.use(function (req, res, next) {
    next();
})


router
    .route("/")
    .get((req, res) => {
        console.log("user hit books page")
        res.status(200).sendFile(path.resolve(__dirname, './books.html'))
    })


module.exports = router;
