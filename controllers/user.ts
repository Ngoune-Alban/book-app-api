const User = require('../models/User');
const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
import { Request, Response } from 'express';

exports.login = (req: Request, res: Response) => {
    res.status(201).json({ message: "We are in the login function" })

};


exports.register = async (req: Request, res: Response) => {
    try {
        const password = await bcrypt.hash(req.body.password, 2);
        const user = new User({
            email: req.body.email,
            password
        });
        await user.save();
        res.status(201).json("Successfully created user !")
    }
    catch (e) {
        const err = e as Error;
        if (err.name == "ValidationError") {
            res.status(400).json(err.message)
        }
        else res.status(500).json("An unexpeteced error occur !");
    }
};