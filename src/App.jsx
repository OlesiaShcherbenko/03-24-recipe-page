//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import './App.scss'
import image from './assets/image-omelette.jpeg';
import Preparation from './components/Preparation';
import Ingredients from './components/Ingredients';
import Instructions from './components/Instructions';
import Nutrition from './components/Nutrition';

function App() {
  
  return (
    <div className='card'>
      <img src={image} className='img' alt=''/>
      <div className='content'>
        <div>
          <h1>Simple Omelette Recipe</h1>
          <p>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
        </div>
        <Preparation />
        <Ingredients />
        <hr className='line'></hr>
        <Instructions />
        <hr className='line'></hr>
        <Nutrition />
      </div>
    {/*
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    */}
    </div>
  )
}

export default App
