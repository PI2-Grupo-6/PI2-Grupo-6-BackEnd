import mongoose, { Schema, Document, Model } from 'mongoose';
import { IFood } from './Food';

export interface ICanister extends Document {
    name: string;
    bocalType: string;
    currentFood: IFood['_id'];
    foodQuantity: number;
}

const canisterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    bocalType: {
        type: String,
        required: true
    },
    currentFood: {
        type: Schema.Types.ObjectId,
        ref: 'Food'
    },
    foodQuantity: {
        type: Number,
        required: true
    }
});

const Canister = mongoose.model('Canister', canisterSchema);
export default Canister;