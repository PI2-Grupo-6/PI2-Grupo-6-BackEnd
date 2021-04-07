import mongoose from 'mongoose';
import app from './application';

const PORT = 3000;

app.get('/', (req, res) => {
	res.send('Hello World!');
});


app.listen(PORT, () => {
	console.log(`App listening at http://localhost:${PORT}`);

	const db = mongoose.connection;
	db.on('error', console.error.bind(console, 'Connection error: '));
	db.once('open', () => console.log('Connected to MongoDB'));
});

