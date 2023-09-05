import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Update from "./components/Update";
import Add from "./components/Add";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
        <Route path="/add" element={<Add />}></Route>
      </Routes>
    </>
  );
}

export default App;
