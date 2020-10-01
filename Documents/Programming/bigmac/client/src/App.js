import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard/dashboard'
import Header from './components/header/header';

function App() {

  return (
    <div className="App">
      <Header />
      <h1>
        GRANDE MAC
      </h1>
      <Dashboard />
    </div>
  );
}

export default App;
