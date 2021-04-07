import mongoose, { Schema } from 'mongoose';

const foodSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    weight: {
        type: Number
    }
});

const Food = mongoose.model('Food', foodSchema);
export default Food;