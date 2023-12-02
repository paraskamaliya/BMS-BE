const express = require("express");
const itemRouter = express.Router();
const { auth } = require("../middlewares/auth.middleware")
const { ItemModel } = require("../model/item.model")

itemRouter.use(auth)
itemRouter.get("/", async (req, res) => {
    try {
        const items = await ItemModel.find();
        res.status(200).send(items)
    } catch (error) {
        res.status(400).send({ "message": "Something went wrong", "err": error })
    }
})

itemRouter.post("/add", async (req, res) => {
    try {
        const newItem = new ItemModel(req.body);
        await newItem.save();
        const items = await ItemModel.find();
        res.status(200).send(items);
    } catch (error) {
        res.status(400).send({ "message": "Something went wrong", "err": error })
    }
})

itemRouter.patch("/:id/update", async (req, res) => {
    const { id } = req.params;
    try {
        await ItemModel.findByIdAndUpdate({ _id: id }, req.body);
        let item = await ItemModel.find();
        res.status(200).send(item);
    } catch (error) {
        res.status(400).send({ "message": "Something went wrong", "err": error })
    }
})

module.exports = { itemRouter };