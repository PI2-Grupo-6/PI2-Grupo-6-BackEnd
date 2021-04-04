import express from 'express';
import mongoose, { mongo } from 'mongoose';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello World!');
});

mongoose.connect('mongodb://mongo:27017/backend', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`);

	const db = mongoose.connection;
	db.on('error', console.error.bind(console, 'Connection error: '));
	db.once('open', () => console.log('Connected to MongoDB'));
});

