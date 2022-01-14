import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home.js';
import Footer from './components/Footer/Footer.js';
import JsFlashcards from './components/JsFlashcards/JsFlashcards.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
      <Routes>
        <Route path='/' element={
          <div className='main'>
            <Home />
            <Footer />
          </div>
        } />
        <Route path='/about' element={
          <div className='main'>
            <Home />
            <Footer />
          </div>
        } />
        <Route path='/case-study/:projectName' element={
          <div className='main'>
            <JsFlashcards />
          </div>
        } />
      </Routes>
      </main>
    </div>
  );
}

export default App;
