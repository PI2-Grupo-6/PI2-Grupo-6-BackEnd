import mongoose, { Schema } from 'mongoose';

const foodSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

const Food = mongoose.model('Food', foodSchema);
export default Food;