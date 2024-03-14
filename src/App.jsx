import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

/**
 * @returns {JSX.Element}
 * @constructor
 * @description
 * This is the main component of the application.
 * It is a simple counter that increments the count when the button is clicked.
 * It also displays the Vite and React logos.
 * The logos are clickable and will open the respective documentation pages.
 * The component is styled using the App.css file.
 * The component is exported as the default export.
 * The component is imported in the index.jsx file.
 * The component is rendered in the index.jsx file.
 */
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + new branch</h1>
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
    </>
  );
}

export default App;
