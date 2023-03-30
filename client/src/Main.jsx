import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index from './Index';
import ErrorPage from './pages/ErrorPage';
import RecoveryPasswordPage from './pages/recoveryPassword';
import Dashboard from './pages/Dashboard'
import Login from "./pages/Login"
import { RegisterUser } from './pages/registerUser';
import RevenuesList from './pages/RevenuesList';
import ExpensesList from './pages/ExpensesList';
import AdminDashboard from './pages/AdminDashboard';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import FormContact from './pages/FormContact';
import About from './pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: [<Header model="default" />, <Home/>, <Footer/>]
      },
      {
        path: '/about',
        element: [<Header model="default" />, <About/>, <Footer/>]
      },
      {
        path: '/ourteam',
        element: <Login />
      },
      {
        path: '/contact',
        element: [<Header model="default" />, <FormContact/>, <Footer/>]
      },
      {
        path: '/login',
        element: [<Header model="default" />, <Login/>, <Footer/>]
      },
      {
        path: '/register',
        element: [<Header model="default" />, <RegisterUser/>, <Footer/>]
      },
      {
        path: '/recovery',
        element:[<Header model="default" />, <RecoveryPasswordPage/>, <Footer/>]
      },
      {
        path:'/dashboard',
        element: <Dashboard/>

      },
      {
        path:'/dashboard/revenueslist',
        element: <RevenuesList/>

      },
      {
        path:'/dashboard/expenseslist',
        element: <ExpensesList/>

      },
      {
        path:'/admin',
        element: [<Header model="logged" />, <AdminDashboard/>, <Footer/>]

      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
)
