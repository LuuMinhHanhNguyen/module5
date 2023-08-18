import logo from "./logo.svg";
import "./App.css";
import Blog from "./components/Blog";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Blog />
    </BrowserRouter>
  );
}

export default App;
