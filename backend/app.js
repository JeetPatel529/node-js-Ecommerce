require('dotenv').config()
const express = require("express");
const app = express();


const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


require("./routers")

const PORT = process.env.PORT || 0;

app.listen(PORT, (e) => {
    if (e) {
        console.log(e);
    }
    else {
        console.log(`app run in this PORT ${PORT}`);
    }
})