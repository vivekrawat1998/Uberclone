const mongoose = require('mongoose');

// MongoDB credentials
const username = "vivekrwt";
const password = "vivekrwt@#123"; // Replace with your actual password
const clusterName = "cluster0";

// Construct MongoDB connection URL
const mongoDB_URL = `mongodb+srv://${encodeURIComponent(username)}:${encodeURIComponent(password)}@${clusterName}.i5clcl0.mongodb.net/?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(mongoDB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the database');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1); 
  }
};

module.exports = connectDB;
