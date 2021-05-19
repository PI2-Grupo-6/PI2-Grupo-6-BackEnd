import mongoose from 'mongoose';

export const connect = async () => {
    mongoose.connect("mongodb://localhost:27017/backend", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};

export const truncate = async () => {
    if (mongoose.connection.readyState !== 0) {
        const { collections } = mongoose.connection;

        const promises = Object.keys(collections).map((collection) =>
            mongoose.connection.collection(collection).deleteMany({})
        );

        await Promise.all(promises);
    }
};
  
export const disconnect = async () => {
    if (mongoose.connection.readyState !== 0) {
        await mongoose.disconnect();
    }
};
  