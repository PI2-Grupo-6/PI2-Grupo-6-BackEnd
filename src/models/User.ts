import mongoose, { Schema, Document, Model, NativeError, CallbackError } from 'mongoose';
import PrettyError from '../utils/error';

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
        minlength: 5
    },
    password: {
        type: String,
        required: true,
        match: /(?=.*\d)?(?=.*[a-z])(?=.*[A-Z])?(?=.*[!@#$%^&*])?/,
        minlength: 8
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});

userSchema.post<IUser>('save', function (error: NativeError, doc: IUser, next: (err?: CallbackError) => void) {
    next(new PrettyError({err: error, status: 402}));
});

userSchema.post<IUser>(/^find/, function (doc: IUser | Array<IUser>, next: (err?: CallbackError) => void) {
    if (!doc || JSON.stringify(doc) == '[]') {
        next(new PrettyError({message: 'User(s) not found', status: 400}));
    }
    next();
});

const User: Model<IUser> = mongoose.model('User', userSchema);
export default User;
