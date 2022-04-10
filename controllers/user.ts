const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
import { Request, Response } from 'express';

exports.login = async (req: Request, res: Response) => {
    const user = await User.findOne({
        email: req.body.email
    })
    if (!user) {
        return res.status(401).json('User not found!');
    }
    const valid = await bcrypt.compare(req.body.password, user.password);
    if (!valid) {
        return res.json('Incorrect credentials !');
    }
    return res.status(200).json({
        userId: user._id,
        token: jwt.sign({
            userId: user._id
        }, 'RANDOM_SECRET_TOKEN_KEY', {
            expiresIn: '24h'
        })
    })
};


exports.register = async (req: Request, res: Response) => {
    try {
        const password = await bcrypt.hash(req.body.password, 2);
        const user = new User({
            email: req.body.email,
            password,
            pseudo: req.body.pseudo
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