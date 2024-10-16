const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); // For password hashing
require('dotenv').config(); // Load environment variables

const app = express();

// Middleware to parse JSON bodies in requests
app.use(express.json());

const users = []; // In-memory array to store users (replace with a database in production)

// Secret key for signing JWTs 
const SECRET_KEY = process.env.JWT_SECRET || 'your_secure_secret';

// Route for user registration
app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    // Check if the user already exists
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(400).json({ error: 'User already exists' });
    }

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Store the user in the array (in a real app, save this in a database)
    users.push({ username, password: hashedPassword });
    res.status(201).json({ message: 'User registered successfully' });
});

// Route for login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Validate credentials 
    const user = users.find(user => user.username === username);
    if (user && bcrypt.compareSync(password, user.password)) {
        // Generate a JWT token
        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' }); // Token expires in 1 hour
        res.json({ token }); // Send token in response
    } else {
        res.status(401).json({ error: 'Invalid credentials' }); // Send 401 if credentials are invalid
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

