import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IFood extends Document {
    name: string;
    weight: number;
    portionSize: string;
}

const foodSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    portionSize: {
        type: String
    },
    weight: {
        type: Number
    }
});

const Food: Model<IFood> = mongoose.model('Food', foodSchema);
export default Food;