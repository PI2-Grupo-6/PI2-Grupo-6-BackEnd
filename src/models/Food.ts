import mongoose, { Schema, Document, Model, NativeError, CallbackError } from 'mongoose';

export interface IFood extends Document {
    name: string;
    foodType: string;
    description: string;
}

export const foodSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    foodType: {
        type: String,
        enum: ['pasty', 'dry', 'liquid']
    },
    description: {
        type: String
    },
});

foodSchema.post<IFood>('save', function (error: NativeError, doc: IFood, next: (err?: CallbackError) => void) {
    if (error.name === 'ValidationError') {
        next(new Error('Food could not be created'));
    }
});

const Food: Model<IFood> = mongoose.model('Food', foodSchema);
export default Food;
