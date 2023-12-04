import express, { request } from "express";
import { PORT, mongodbURL } from "./config.js"; 
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Index get request
app.get("/", (request, response) => {
    console.log(request);
    return response.status(234).send("Welcome to MERN")
})

// Get all books
app.get("/books", async (request, response) => {
    const books = await Book.find({});
    return response.status(200).send(books);
})

// Get book by id
app.get("/books/:id", async (request, response) => {
    const { id } = params.id;
    const books = await Book.findById(id);
    return response.status(200).send(books);
})

// Create new book
app.post("/books", async (request, response) => {
    const newBook = {
        title: request.body.title,
        author: request.body.author,
        publishYear: request.body.publishYear
    }
    const book = await Book.create(newBook);
    return response.status(201).send(book);
})



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