import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home.js';
import Footer from './components/Footer/Footer.js';
import JsFlashcards from './components/JsFlashcards/JsFlashcards.js';
import Magesnitza from './components/Magesnitza/Magesnitza.js';
import MathTrainer from './components/MathTrainer/MathTrainer.js';
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
          <Route path='/case-study/js-flashcards' element={
            <div className='main'>
              <JsFlashcards />
            </div>
          } />
          <Route path='/case-study/magesnitza' element={
            <div className='main'>
              <Magesnitza />
            </div>
          } />
          <Route path='/case-study/math-trainer' element={
            <div className='main'>
              <MathTrainer />
            </div>
          } />
        </Routes>
      </main>
    </div>
  );
}

export default App;
