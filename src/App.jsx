import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import './App.css';

// import PrivateRoute from './components/PrivateRoute';

const App = () => {

  return (
    <Login />
  )
    
};

export default App;
