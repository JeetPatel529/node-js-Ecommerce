require('dotenv').config();
const express = require("express");
const bodyParser = require('body-parser');
const routers = require("./routers");
const multer = require('multer');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

app.use(cors());

app.use('/public', express.static('public'));

app.use(upload.fields([{ name: 'category_img', maxCount: 1 }, { name: 'category_bg_img', maxCount: 1 }]));
app.use(upload.fields([{ name: 'product_img', maxCount: 1 }]));

app.use("/", routers.categoryRouter);
app.use("/", routers.productRouter);

app.use((req, res, next) => {
    res.status(404).json({ error: "Route not found" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, (e) => {
    if (e) {
        console.error(e);
    } else {
        console.log(`App running on port ${PORT}`);
    }
});

module.exports = app;
