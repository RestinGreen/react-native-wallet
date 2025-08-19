import express from 'express';
import dotenv from 'dotenv';
import rateLimiter from './middleware/rateLimiter.js';

import transactionsRoute from "./routes/transactionsRoute.js"
import { initDB } from './config/db.js';

dotenv.config()

const app = express();

//middleware
app.use(rateLimiter)
app.use(express.json());



app.get('/', (req, res) => {
    res.send('Welcome to the backend server!');
});


app.use("/api/transactions", transactionsRoute)

const PORT = process.env.PORT

initDB().then(() => {

    app.listen(PORT, () => {
        console.log('Server is running on port:', PORT);
    });


})