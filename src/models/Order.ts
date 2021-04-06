import mongoose, { Schema } from  'mongoose';

const orderSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    items: [
        { type: Schema.Types.ObjectId, ref: 'Food' }
    ]
});

const Order = mongoose.model('Order', orderSchema);
export default Order; 