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

exports.findAllBooks = async (req: Request, res: Response) => {
    const books = await Book.find();
    res.status(200).json(books);
}

exports.findOneBook = async (req: Request, res: Response) => {
    const book = await Book.findOne({ _id: req.params.id });
    res.status(200).json(book);
}

exports.updateOneBook = async (req: RequestCustom, res: Response) => {
    const book = await Book.findOne({ _id: req.params.id });
    if (!book) return res.status(400).json("The book does not exist!");
    if (book.authorId != req.userId) return res.status(403).json("You do not have the right to update this book!");
    await Book.updateOne({
        _id: req.params.id
    },
        {
            title: req.body.title,
            description: req.body.description
        })
    return res.status(200).json("Successfully updated book !")
}
// exports.deleteOneBook = (req: Request, res: Response) => {
// }