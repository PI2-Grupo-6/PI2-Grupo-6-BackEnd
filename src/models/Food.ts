import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IFood extends Document {
    name: string;
    foodType: string;
    description: string;
}

export const foodSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    foodType: {
        type: String,
        enum: ['pasty', 'dry', 'liquid']
    },
    description: {
        type: String
    },
});

const Food: Model<IFood> = mongoose.model('Food', foodSchema);
export default Food;
