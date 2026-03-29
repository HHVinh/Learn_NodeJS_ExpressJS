const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/f8_education_dev');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Failed to connect to MongoDB', error);
    }
}

module.exports = { connect };