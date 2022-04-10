const User = require('../models/User');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
import { Request, Response } from 'express';

exports.login = (req: Request, res: Response) => {
    res.status(201).json({ message: "We are in the login function" })

};


exports.register = (req: Request, res: Response) => {
    console.log(req.body);
    const user = new User({
        email: req.body.email,
        password: req.body.password
    });
    user.save()
        .then(() => {
            res.status(201).json({ message: "Successfully created user !" })
        })
};