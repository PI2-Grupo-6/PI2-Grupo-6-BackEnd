import mongoose, { Schema, Document } from  'mongoose';
import { IFood } from './Food';

interface IOrderItem {
    item: IFood['_id'];
    quantity: number;
}

export interface IOrder extends Document {
    date: Date;
    items: [IOrderItem];
    status: string;
}

const orderItemSchema = new Schema({
    item: { 
        type: Schema.Types.ObjectId,
        ref: 'Food',
        required: true 
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    }
}, { _id: false});

const orderSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    items: [orderItemSchema],
    status: {
        type: String,
        required: true
    }
});

const Order = mongoose.model<IOrder>('Order', orderSchema);
export default Order; 