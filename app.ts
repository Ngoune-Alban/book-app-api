import express, { Request, Response, Application } from 'express';

const app: Application = express();
const userRoutes = require('./routes/user');
const bookRoutes = require('./routes/book');

app.use(express.json());


app.get('/health', (req: Request, res: Response): void => {
    res.send('The API is working properly');
});

app.use('/auth/', userRoutes);
app.use('/book/', bookRoutes);

export default app;