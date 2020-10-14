import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Review from './Components/Dashboard/Review/Review';
import AddService from './Components/Dashboard/AddService/AddService';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AddOrder from './Components/Dashboard/AddOrder/AddOrder';
import MyOrderList from './Components/Dashboard/MyOrderList/MyOrderList';
import ServiceList from './Components/Dashboard/ServiceList/ServiceList';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/addservice">
            <AddService />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/myOrderList">
            <MyOrderList />
          </PrivateRoute>
          <PrivateRoute path="/service/item/:_id">
            <AddOrder />
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review />
          </PrivateRoute>
          <PrivateRoute path="/order">
            <AddOrder />
          </PrivateRoute>
          <PrivateRoute path="/serviceList">
            <ServiceList />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;