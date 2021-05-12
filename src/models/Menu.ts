import mongoose, { Schema, Document, Model } from 'mongoose';
import { IFood, foodSchema } from './Food';

export interface IMenu extends Document {
    price: number;
    startDate: Date;
    endDate: Date;
    items: [IFood];
}

const menuSchema = new Schema({
    price: {
        type: Number,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: Date,
    items: [foodSchema]
});

const Menu: Model<IMenu> = mongoose.model('Menu', menuSchema);
export default Menu;
