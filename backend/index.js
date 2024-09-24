import express, { request, response } from "express";
import { PORT, mongodbURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

// CORS policy
// const cors = require('cors');

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));


// Middleware for parsing request body
app.use(express.json());



// Index get request
app.get("/", (request, response) => {
    console.log(request);
    return response.status(234).send("Welcome to MERN")
})

app.use("/books", booksRoute);

mongoose
    .connect(mongodbURL)
    .then(() => {
        console.log("Database connected");
        app.listen(PORT, () => {
            console.log(`App is listening at port ${PORT}`)
        })
    })
    .catch((error) => {
        console.log(error);
    })