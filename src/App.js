import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { Route, Switch } from 'react-router-dom';
import MyList from './components/MyList';
import { useState, useEffect } from 'react';

function App() {

  return (
    <div className="App">
         <Switch>
        <Route exact path="/">
          <Login/>
        </Route >

        <Route exact path="/register">
          <Register/>
        </Route >
        
        <Route exact path="/list">
          <MyList/>
        </Route >
      </Switch>
 
    </div>
  );
}

export default App;