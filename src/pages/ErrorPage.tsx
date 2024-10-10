<<<<<<< HEAD:src/pages/ErrorPage.tsx
// src/pages/ErrorPage.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const ErrorPage: React.FC = () => {
    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h4">Error 404</Typography>
            <Typography variant="body1">Page not found!</Typography>
        </Box>
    );
};

export default ErrorPage;
=======
// throws out an error page if page not found
const ErrorPage = () => {
  return (
    <section>
      <h1>404: Page Not Found</h1>
      <h1> ¯\_(ツ)_/¯</h1>
    </section>
  );
};

export default ErrorPage;
>>>>>>> f0fb3fde482e6a9b817507767038f52966805dcc:client/src/pages/ErrorPage.tsx
