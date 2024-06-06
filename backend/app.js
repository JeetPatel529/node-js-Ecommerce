require('dotenv').config();

const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');

const routers = require('./routers')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/public', express.static('public'));
app.use(upload.fields([{ name: 'category_img', maxCount: 1 }, { name: 'category_bg_img', maxCount: 1 }]));

app.use('/', routers.categoryRouter);

const PORT = process.env.PORT || 0;

app.listen(PORT, (err) => {
    if (err) {
        console.log("PORT ERROR", err);
    } else {
        console.log(`App running on port ${PORT}`);
    }
});
