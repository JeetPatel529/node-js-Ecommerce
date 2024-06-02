require('dotenv').config()
const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const multer  = require('multer')
const cors = require('cors')
const upload = multer()




app.use(cors())


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())




PORT = process.env.PORT || 0;

app.listen(PORT, (err) => {
    if (err) {
        console.log("PORT ERROR", err);
    }
    else {
        console.log(`app run in ${PORT}`);
    }
})

