import { Request, Response } from 'express';
const Book = require('../models/book');

interface RequestCustom extends Request {
    userId: string;
}

exports.createOneBook = async (req: RequestCustom, res: Response) => {
    try {
        const book = new Book({ ...req.body, authorId: req.userId });
        await book.save();
        return res.status(201).json("Successfully created book !")
    }
    catch (e) {
        const err = e as Error;
        if (err.name == "ValidationError") {
            res.status(400).json(err.message)
        }
        else res.status(500).json("An unexpeteced error occur !");
    }
}

// exports.findAllBooks = (req: Request, res: Response) => {
// }
// exports.findOneBook = (req: Request, res: Response) => {
// }
// exports.updateOneBook = (req: Request, res: Response) => {
// }
// exports.deleteOneBook = (req: Request, res: Response) => {
// }