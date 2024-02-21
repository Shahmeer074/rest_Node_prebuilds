const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const routes = require("./Routes");

const app = express();
dotenv.config();
app.use(express.json());

//mongodb configuration
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to database");
    } catch (err) {
        console.log("Error come from database connection", err);
    }
};

//come from routes(index.js) folder we
app.use('/api',routes);

//PORT
const port = process.env.PORT || 3001;
try {
    app.listen(port, () => {
        console.log(`listening on port ${port}`);
    });
} catch (err) {
    console.log("error coming from server connection", err);
}


connectDB();
