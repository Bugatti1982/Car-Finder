// Code for rendering the app and routing
// must install required packages
// npm install react-router-dom
// npm install @types/react-router-dom
// npm install @types/react
// must make sure tsconfig is configured correctly
// created to handle client side routing
//also imports CSS files and React components that are used as pages
import ReactDOM from 'react-dom/client'

// this function serves as main function and this also handles routing errors
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// this is the default route renders the main page component
import './index.css'

//other routes are defined in the children array they include paths like VolunteerPage, VolunteerForm, EditVolunteer, EditWork
import App from './App.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import MainPage from './pages/MainPage.tsx';
import VolunteerPage from './pages/VolunteerPage.tsx';
import VolunteerForm from './pages/VolunteerForm.tsx';
import EditVolunteer from './pages/EditVolunteer.tsx';
import EditWork from './pages/EditWork.tsx';

// this passes the router to the router provider as a prop
// the app uses defined routes to render the components based on current url
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />
      }, 
      {
        path: '/show-volunteers',
        element: <VolunteerPage />
      },
      {
        path: '/new-volunteer',
        element: <VolunteerForm />
      },
      {
        path: '/edit-volunteer',
        element: <EditVolunteer />
      },
      {
        path: '/edit-work',
        element: <EditWork />
      }
    ]
  }
]);

const rootElement = document.getElementById('root');
if(rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router} />
  );
}
