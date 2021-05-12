import mongoose, { Schema, Document, Model } from 'mongoose';
import { IMachine, machineSchema } from './Machine';

export interface IRestaurant extends Document {
   name: string;
   machines: [IMachine];
}

const restaurantSchema = new Schema({
    name: {
        type: String
    },
    machines: [machineSchema]
});

const Restaurant: Model<IRestaurant> = mongoose.model('Restaurant', restaurantSchema);
export default Restaurant;