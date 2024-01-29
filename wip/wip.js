const express = require("express");
const path = require("path")
let router = express.Router();

router.use(function(req,res, next) {
    next();
})


router
.route("/")
.get((req, res) => {
    console.log("user hit wip page")
    res.status(200).sendFile(path.resolve(__dirname, './wip1.html'))
})


module.exports = router;
