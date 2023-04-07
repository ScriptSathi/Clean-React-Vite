import { useState } from 'preact/hooks';
import preactLogo from '../assets/preact.svg';
import viteLogo from '../../public/vite.svg';
import './app.css';

export default function App() {
   const [count, setCount] = useState(0);

   return (
      <div id="app">
         <div>
            <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
               <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://preactjs.com" target="_blank" rel="noreferrer">
               <img
                  src={preactLogo}
                  className="logo preact"
                  alt="Preact logo"
               />
            </a>
         </div>
         <h1>Vite + Preact</h1>
         <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
               count is {count}
            </button>
            <p>
               Edit <code>src/app.tsx</code> and save to test HMR
            </p>
         </div>
         <p className="read-the-docs">
            Click on the Vite and Preact logos to learn more
         </p>
      </div>
   );
}
