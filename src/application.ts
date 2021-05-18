import express from 'express';
import routes from './routes';
import { connect } from './database';
import ErrorHandler from './middlewares/errorHandling'
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
		connect();
	}
	
	private routesSetup() {
		this.express.use(routes);
		this.express.use(ErrorHandler)
	}
}

export default new Application().express;