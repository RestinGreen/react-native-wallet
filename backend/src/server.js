import express from 'express';
import dotenv from 'dotenv';
import rateLimiter from './middleware/rateLimiter.js';

import transactionsRoute from "./routes/transactionsRoute.js"
import { initDB } from './config/db.js';
import job from "./config/cron.js"

dotenv.config()

const app = express();


if (process.env.NODE_ENV === 'production') {
    job.start();
}

//middleware
app.use(rateLimiter)
app.use(express.json());



app.get('/api/health', (req, res) => {
    res.send('Welcome to the backend server!');
});


app.use("/api/transactions", transactionsRoute)

const PORT = process.env.PORT
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
});

initDB().then(() => {

    app.listen(PORT, () => {
        console.log('Server is running on port:', PORT);
    });


})