import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import LandingPage from './LandingPage';
import { GlobalProvider } from './context/GlobalState';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>
  },
  {
    path: "/app",
    element: <App/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GlobalProvider>
    <RouterProvider router={router}/>
  </GlobalProvider>
);

