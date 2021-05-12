import mongoose, { Schema, Document, Model } from 'mongoose';

interface IMachine extends Document {
    status: string;
    isActivated: boolean;
}

export interface IRestaurant extends Document {
   name: string;
   machines: [IMachine];
}

const machineSchema = new Schema({
    status: {
        type: String,
        required: true
    },
    isActivated: {
        type: Boolean,
        required: true
    }
});

const restaurantSchema = new Schema({
    name: {
        type: String
    },
    machines: [machineSchema]
});

const Restaurant: Model<IRestaurant> = mongoose.model('Restaurant', restaurantSchema);
export default Restaurant;