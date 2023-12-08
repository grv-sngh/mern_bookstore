import express from 'express';
import { Item } from '../models/itemModel.js';

const router = express.Router();


// Get all items
router.get("/", async (request, response) => {
    try {
        const items = await Item.find({});
        return response.status(200).json({
            count: items.length,
            data: items
        });
    } catch (error) {
        console.log(error);
        return response.status(500).send({ message: error.message });
    }

})

// Get item by id
router.get("/:id", async (request, response) => {
    try {
        const { id } = request.params;
        const items = await Item.findById(id);
        return response.status(200).send(items);
    } catch (error) {
        console.log(error);
        return response.status(500).send({ message: error.message });
    }

})

// Create new item
router.post("/", async (request, response) => {
    try {
        if (!request.body.name ||
            !request.body.quantity ||
            !request.body.description) {
            return response.status(400).send('Send all fields: name, quantity, description');
        }

        const newItem = {
            name: request.body.name,
            quantity: request.body.quantity,
            description: request.body.description
        }
        const item = await Item.create(newItem);
        return response.status(201).send(item);

    } catch (error) {
        console.log(error);
        return response.status(500).send({ message: error.message });
    }
})

// Update an item
router.put("/:id", async (request, response) => {
    try {
        if (!request.body.name ||
            !request.body.quantity ||
            !request.body.description) {
            return response.status(400).send('Send all fields: name, quantity, description');
        }
        const { id } = request.params;
        const result = await Item.findByIdAndUpdate(id, request.body);
        if (!result) {
            return response.status(404).send('Item not found')
        }
        return response.status(200).send('Item updated successfully')
    } catch (error) {
        console.log(error);
        return response.status(500).send({ message: error.message });
    }

})

// Delete an item
router.delete("/:id", async (request, response) => {
    const { id } = request.params;
    const result = await Item.findByIdAndDelete(id)
    if (!result) {
        return response.status(404).send('Item not found')
    }
    return response.status(200).send('Item deleted successfully')
})

export default router;