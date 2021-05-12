import mongoose, { Schema, Document, Model } from 'mongoose';
import { IFood } from './Food';

export interface ILogFood extends Document {
    food: IFood['_id'];
    addedTime: Date;
}

export interface ILogHowFullCanisterIs extends Document {
    howFull: number;
    addedTime: Date;
}

export interface ILogTemperature extends Document {
    temperature: number;
    addedTime: Date;
}

export interface ICanister extends Document {
    name: string;
    bocalType: string;
    hotOrCold: boolean;
    logFood: [ILogFood];
    logTemperature: [ILogTemperature];
    logHowFull: [ILogHowFullCanisterIs];
}

const logFoodSchema = new Schema({
    food: {
        type: Number,
        required: true
    },
    addedTime: Date
});

const logHowFullCanisterIsSchema = new Schema({
    howFull: {
        type: Number,
        required: true
    },
    addedTime: Date
});

const logTemperatureSchema = new Schema({
    temperature: {
        type: Number,
        required: true
    },
    addedTime: Date
});


const canisterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    bocalType: {
        type: String,
        required: true
    },
    hotOrCold: {
        type: Boolean,
        required: true
    },
    logFood: [logFoodSchema],
    logTemperature: [logTemperatureSchema],
    logHowFull: [logHowFullCanisterIsSchema],
});

const Canister: Model<ICanister> = mongoose.model('Canister', canisterSchema);
export default Canister;
