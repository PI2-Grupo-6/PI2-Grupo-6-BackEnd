import mongoose, { Schema, Document, Model } from 'mongoose';

interface IFood extends Document {
    name: string,
    weight: number
}

const foodSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    weight: {
        type: Number
    }
});

const Food: Model<IFood> = mongoose.model('Food', foodSchema);
export default Food;