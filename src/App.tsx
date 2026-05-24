import HomePage from "./pages/home-page/HomePage";
import Navbar from "./components/navbar/Navbar";
import { useRef } from "react";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
    </div>
  );
};

export default App;
