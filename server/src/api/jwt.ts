import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();

// Middleware to parse JSON bodies in requests
app.use(express.json());

interface User {
    username: string;
    password: string;
}

const users: User[] = []; // In-memory array to store users (replace with a database in production)

// Secret key for signing JWTs
const SECRET_KEY: string = process.env.JWT_SECRET || 'your_secure_secret';

// Route for user registration
app.post('/register', async (req: Request, res: Response): Promise<Response> => {
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
    return res.status(201).json({ message: 'User registered successfully' });
});

// Route for user login
app.post('/login', async (req: Request, res: Response): Promise<Response> => {
    const { username, password } = req.body;

    // Validate credentials 
    const user = users.find(user => user.username === username);
    if (user && await bcrypt.compare(password, user.password)) {
        // Generate a JWT token
        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' }); // Token expires in 1 hour
        return res.json({ token }); // Send token in response
    } else {
        return res.status(401).json({ error: 'Invalid credentials' });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});