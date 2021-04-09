import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

class Application {
	public express: express.Application = express();

	constructor() {
		this.mongoSetup();
		this.config();
		this.routesSetup();
	}

	private config() {
		this.express.use(express.json());
		this.express.use(express.urlencoded({ extended: false }));
	}

	private mongoSetup() {
		mongoose.connect('mongodb://mongo:27017/backend', {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
	}

	private routesSetup() {
		this.express.use(routes);
	}
}

export default new Application().express;