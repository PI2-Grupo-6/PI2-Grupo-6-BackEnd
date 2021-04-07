import mongoose, { Schema } from 'mongoose';

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

const Menu = mongoose.model('Menu', menuSchema);
export default Menu;