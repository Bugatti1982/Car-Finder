// src/components/Login.tsx
import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import theme from '../theme';

interface LoginProps {
    onLogin: (username: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

// currently just fake user and pass
    const handleSubmit = () => {
        if (username === 'user' && password === 'pass') {
            onLogin(username, password);
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <Box sx={theme.login.container}>
            <Box sx={theme.login.box}>
                <Typography mb={theme.login.title.mb} color={theme.login.title.color}>
                    Login
                </Typography>
                {error && (
                    <Typography sx={theme.login.error} color={theme.login.error.color}>
                        {error}
                    </Typography>
                )}
                <TextField
                    label="Username"
                    variant="outlined"
                    fullWidth
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    onClick={handleSubmit}
                    sx={theme.login.button}
                >
                    Login
                </Button>
            </Box>
        </Box>
    );
};

export default Login;
