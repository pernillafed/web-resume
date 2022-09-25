import HomePage from "./pages/home-page/HomePage"
import Navbar from "./components/navbar/Navbar"
import Sidebar from "./components/sidebar/Sidebar"
import { useRef } from "react"

const App = () => {
    const presentationRef = useRef();
    const educationRef = useRef();
    const workRef = useRef();
    const portfolioRef = useRef();
    const computerRef = useRef();
    const languagesRef = useRef();

    const refs = {
        presentationRef,
        educationRef,
        workRef,
        portfolioRef,
        computerRef,
        languagesRef
    };

    return (
        <div className="App">
            <Navbar />
            <Sidebar refs={refs} />
            <HomePage refs={refs} />
        </div>
    )
}

export default App;
