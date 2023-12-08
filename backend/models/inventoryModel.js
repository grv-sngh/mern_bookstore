import mongoose from "mongoose";

const inventorySchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)
export const inventory = mongoose.model('Book', inventorySchema);