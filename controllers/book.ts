import { Request, Response } from 'express';
const Book = require('../models/book');


exports.createOneBook = async (req: Request, res: Response) => {
    const book = new Book({ ...req.body });
    console.log(book);
    await book.save();
    return res.status(201).json("Successfully created book !")
}
// exports.findAllBooks = (req: Request, res: Response) => {
// }
// exports.findOneBook = (req: Request, res: Response) => {
// }
// exports.updateOneBook = (req: Request, res: Response) => {
// }
// exports.deleteOneBook = (req: Request, res: Response) => {
// }