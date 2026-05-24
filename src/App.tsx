import HomePage from "./pages/home-page/HomePage";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { useRef } from "react";

const App = () => {
  const presentationRef = useRef<HTMLHeadingElement>(null);
  const educationRef = useRef<HTMLHeadingElement>(null);
  const workRef = useRef<HTMLHeadingElement>(null);
  const portfolioRef = useRef<HTMLHeadingElement>(null);
  const computerRef = useRef<HTMLHeadingElement>(null);
  const languagesRef = useRef<HTMLHeadingElement>(null);

  const refs = {
    presentationRef,
    educationRef,
    workRef,
    portfolioRef,
    computerRef,
    languagesRef,
  };

  return (
    <div className="App">
      <Navbar />
      <Sidebar refs={refs} />
      <HomePage refs={refs} />
    </div>
  );
};

export default App;
