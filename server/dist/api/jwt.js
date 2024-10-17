var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
// Load environment variables
dotenv.config();
const app = express();
// Middleware to parse JSON bodies in anys
app.use(express.json());
const users = []; // In-memory array to store users (replace with a database in production)
// Secret key for signing JWTs
const SECRET_KEY = process.env.JWT_SECRET || 'your_secure_secret';
// Route for user registration
app.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    // Check if the user already exists
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(400).json({ error: 'User already exists' });
    }
    // Hash the password before storing it
    const hashedPassword = yield bcrypt.hash(password, 10);
    // Store the user in the array (in a real app, save this in a database)
    users.push({ username, password: hashedPassword });
    return res.status(201).json({ message: 'User registered successfully' });
}));
// Route for user login
app.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    // Validate credentials 
    const user = users.find(user => user.username === username);
    if (user && (yield bcrypt.compare(password, user.password))) {
        // Generate a JWT token
        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' }); // Token expires in 1 hour
        return res.json({ token }); // Send token in any
    }
    else {
        return res.status(401).json({ error: 'Invalid credentials' });
    }
}));
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
