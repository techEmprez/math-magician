import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Header from './components/Header';
import Home from './components/Home';
import Quote from './components/Quote';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="quote" element={<Quote />} />
        </Routes>
      </div>
    );
  }
}

export default App;
