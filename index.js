const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { itemRouter } = require("./router/item.router");
const cors = require("cors");
const { userRouter } = require("./router/user.router");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use("/items", itemRouter);
app.use("/users", userRouter);

app.get("/", (req, res) => {
    res.end('Welcome To Home Page')
})

app.listen(process.env.PORT, async () => {
    try {
        const connection = await mongoose.connect(process.env.mongoURL);
        console.log("Connected to DB")
    } catch (error) {
        console.log(error);
    }
})