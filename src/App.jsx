import "./App.css";

import ButtonPacks from "./components/ButtonPacks/ButtonPacks.component";
import Logo from "./components/Logo/Logo.component";

function App() {
  return (
    <div className="block text-center">
      <Logo />
      <h1>Vite + React + Tailwindcss + Styled Components</h1>
      <ButtonPacks />
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
      <p>Click on the Vite and React logos to learn more</p>
      <p></p>
    </div>
  );
}

export default App;
