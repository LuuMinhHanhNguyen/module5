import logo from "./logo.svg";
import "./App.css";
import Blog from "./components/Blog";
import NewBlog from "./components/NewBlog";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UpdateBlog from "./components/UpdateBlog";

function App() {
  return (
    <>
      <Routes>
        <Route path="/posts" element={<Blog />} />
        <Route path="/posts/new" element={<NewBlog />} />
        <Route path="/posts/edit/:id" element={<UpdateBlog />} />
        <Route
          path="/posts/details/:id"
          element={<UpdateBlog details="true" />}
        />
      </Routes>
    </>
  );
}

export default App;
