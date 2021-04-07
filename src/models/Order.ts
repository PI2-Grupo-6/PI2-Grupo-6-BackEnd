import mongoose, { Schema } from  'mongoose';

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
})

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

const Order = mongoose.model('Order', orderSchema);
export default Order; 