import mongoose, { Schema, Document, Model } from 'mongoose';
import { IFood } from './Food';

export interface IMenu extends Document {
    price: number;
    startDate: Date;
    endDate: Date;
    items: [IFood['_id']];
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
    items: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Food',
        }
    ]
});

const Menu: Model<IMenu> = mongoose.model('Menu', menuSchema);
export default Menu;
