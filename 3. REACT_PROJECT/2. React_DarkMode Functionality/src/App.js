import { useState } from "react";
import NavBar from "./components/NavBar";
function App() {

  // Creating the state variable which is passed to the NavBar for checking the dark mode functionality
  const[theme, setTheme] = useState('light')
  return (
    <div>
      {/* Passing the theme variable and function */}
      <NavBar theme= {theme} setTheme= {setTheme}/>
    </div>
  );
}

export default App;
