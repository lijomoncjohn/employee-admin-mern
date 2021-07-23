const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config({ path: './src/config/config.env' });

const app = express();

app.use(express.json());

app.use(cors());

const PORT = process.env.PORT;

const server = app.listen(PORT, console.log(`Server running in port ${PORT}`));

process.on('unhandledRejection', (err, promise) => {
	console.log(`Error: `, err.message);

	server.close(() => process.exit(1));
});
