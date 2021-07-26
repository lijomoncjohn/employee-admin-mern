const mongoose = require('mongoose');

const DbConnection = async () => {
	try {
		const con = await mongoose.connect(process.env.MONGO_CLOUD, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true,
			useFindAndModify: true,
		});

		console.log(`Connected to Mongo DB ${con.connection.host}`);
	} catch (error) {
		console.log(`Error connecting to DB: ${error}`);
	}
};

module.exports = DbConnection;
