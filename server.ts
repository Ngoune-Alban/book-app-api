import dotenv from 'dotenv';
dotenv.config();
import http from 'http';
import app from './app';
import mongoose from 'mongoose';
import { Request, Response } from 'express';

const server = http.createServer(app);
const port: number = Number(process.env.PORT) || 3000;


server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});


app.use((req: Request, res: Response, next): void => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

if (process.env.DB_URI) {
    mongoose.connect(process.env.DB_URI)
        .then(() => console.log('Successful connection to DB !'))
        .catch(() => console.log('Connexion to the DB fails !'));
}





