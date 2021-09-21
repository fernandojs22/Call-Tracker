import React from 'react'

import SignIn from './Auth/SignIn'
import SignUp from './Auth/SignUp'
import Calls from './Calls'
import Customers from './Customers'
import Dashboard from './Dashboard'
import Employees from './Employees'
import Settings from './Settings'

import Layout from '../components/Layout/Layout'

const routes = [
  {
    path: 'app',
    element: <Layout />,
    children: [
      { path: Calls.path, element: <Calls /> },
      { path: Customers.path, element: <Customers /> },
      { path: Dashboard.path, element: <Dashboard /> },
      { path: Employees.path, element: <Employees /> },
      { path: Settings.path, element: <Settings /> }
    ]
  },
  {
    path: '/',
    element: <div />,
    children: [
      { path: SignIn.path, element: <SignIn /> },
      { path: SignUp.path, element: <SignUp /> }
    ]
  }
];

export default routes;
