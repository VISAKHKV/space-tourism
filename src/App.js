import logo from "./logo.svg";
import "./assets/css/style.css";
import MainRouter from "./components/MainRouter";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <MainRouter />
            </BrowserRouter>
        </>
    );
}

export default App;
