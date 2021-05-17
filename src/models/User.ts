import mongoose, { Schema, Document, Model, NativeError, CallbackError } from 'mongoose';

export interface IUser extends Document {
    username: string;
    password: string;
    email: string;
}

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});

userSchema.post<IUser>('save', function (error: NativeError, doc: IUser, next: (err?: CallbackError) => void) {
    if (error.name === 'ValidationError') {
        next(new Error('User could not be created'));
    } else {
        next(new Error(error.name));
    }
});

const User: Model<IUser> = mongoose.model('User', userSchema);
export default User;
