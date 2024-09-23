const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/newsAggregator', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Define a User schema and model
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String // Note: In production, you should hash passwords
});
const User = mongoose.model('User', userSchema);

// Registration endpoint
app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = new User({ name, email, password });
        await user.save();
        res.status(200).json({ message: 'Registration Successful!' });
    } catch (error) {
        res.status(500).json({ message: 'Registration failed', error });
    }
});

// Endpoint to fetch all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve users', error });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
