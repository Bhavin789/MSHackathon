import express from "express";
import markup from "../models/markup";

const markupRouter = express.Router();

markupRouter.get('/', async (req, res) => {
    const markups = await markup.findAll({})
    return res.json(markups);
})

export default markupRouter;