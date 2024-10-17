// src/components/ParentFrame.tsx
// This imports the dependencies
import React from 'react';
import { Box } from '@mui/material';
import theme from '../theme';

// This is the main container for the ParentFrame component
// if you have a parent frame component, you can nest other components within it
interface ParentFrameProps {
    //passes nested elements as children
    children: React.ReactNode;
}
// this makes the parent frame a flex container that can wrap any content passed to it
const ParentFrame: React.FC<ParentFrameProps> = ({ children }) => {
    return (
        // this allows consistent styling for the application
        // this fuction wraps the childrenprop and renders any nested components passed to ParentFrame
        <Box sx={theme.mainPage.layoutContainer}>
            {children}
        </Box>
    );
};

export default ParentFrame;