import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IMachine extends Document {
    status: string;
    isActivated: boolean;
}

export const machineSchema = new Schema({
    status: {
        type: String,
        required: true
    },
    isActivated: {
        type: Boolean,
        required: true
    }
});


const Machine: Model<IMachine> = mongoose.model('Machine', machineSchema);
export default Machine;