import React from 'react';
import {FaChevronLeft, FaChevronRight, } from 'react-icons/fa'
import Review from './Review';
function App() {
  return <main>
    <section className="container">
      <div className="title">
        <h2>Our Views</h2>

        <div className="underline"></div>
        <Review />
      </div>
    </section>
    
      </main>;
}

export default App;
