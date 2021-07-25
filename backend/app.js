const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const errorHandler = require('./src/helpers/errorHandler');

const DbConnection = require('./src/helpers/dbConection');

// For managing env variables
dotenv.config({ path: './src/config/config.env' });

// Establish connection to SB
DbConnection();

// Import router modules
const AuthRoute = require('./src/routes/auth.route');
const EmployeeRoute = require('./src/routes/employee.route');

// Init express application
const app = express();

app.use(express.json());

app.use(cors());

// Mounting routes to the app
app.use('/api/auth', AuthRoute);
app.use('/api/employee', EmployeeRoute);

app.use(errorHandler);

const PORT = process.env.PORT;

// Start server
const server = app.listen(PORT, console.log(`Server running in port ${PORT}`));

// Close server on getting Error: UnhandledPromiseRejection
process.on('unhandledRejection', (err, promise) => {
	console.log(`Error: `, err.message);

	// Close server
	server.close(() => process.exit(1));
});
