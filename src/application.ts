import express from 'express';
import mongoose from 'mongoose';

class Application {
    public express = express();

    constructor() {
        this.mongoSetup();
        this.routesSetup();
    }

    private mongoSetup() {
        mongoose.connect('mongodb://mongo:27017/backend', {
	        useNewUrlParser: true,
	        useUnifiedTopology: true
        });
    }

    private routesSetup() {

    }
}

export default new Application().express;