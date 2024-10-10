// Import necessary dependencies
import React from 'react';
import ReactDOM from 'react-dom/client'; // Use for React 18+ rendering
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import your CSS file for styling
import './index.css';

// Import React components used in the router
import App from './App.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import MainPage from './pages/MainPage.tsx';
import VolunteerPage from './pages/VolunteerPage.tsx';
import VolunteerForm from './pages/VolunteerForm.tsx';
import EditVolunteer from './pages/EditVolunteer.tsx';
import EditWork from './pages/EditWork.tsx';

// Create the router with all the routes and their corresponding components
const router = createBrowserRouter([
  {
    path: '/', // Default route for the main page
    element: <App />, // This will render the `App` component
    errorElement: <ErrorPage />, // Handles routing errors
    children: [ // Nested routes for different paths
      {
        index: true, // The default page when visiting `/`
        element: <MainPage />
      }, 
      {
        path: 'show-volunteers', // URL path for the volunteer list page
        element: <VolunteerPage />
      },
      {
        path: 'new-volunteer', // URL path for adding a new volunteer
        element: <VolunteerForm />
      },
      {
        path: 'edit-volunteer', // URL path for editing a volunteer
        element: <EditVolunteer />
      },
      {
        path: 'edit-work', // URL path for editing work
        element: <EditWork />
      }
    ]
  }
]);

// Find the root element in the HTML file
const rootElement = document.getElementById('root');

// Ensure that the root element exists before rendering
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
