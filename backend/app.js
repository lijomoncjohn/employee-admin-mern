const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const DbConnection = require('./src/hepers/dbConection');

// For managing env variables
dotenv.config({ path: './src/config/config.env' });

// Establish connection to SB
DbConnection();

// Import router modules
const AuthRoute = require('./src/routes/auth.routes');

// Init express application
const app = express();

app.use(express.json());

app.use(cors());

// Mounting routes to the app
app.use('/api/auth', AuthRoute);

const PORT = process.env.PORT;

// Start server
const server = app.listen(PORT, console.log(`Server running in port ${PORT}`));

// Close server on getting Error: UnhandledPromiseRejection
process.on('unhandledRejection', (err, promise) => {
	console.log(`Error: `, err.message);

	// Close server
	server.close(() => process.exit(1));
});
