import logo from "./logo.svg";
import "./App.css";
import Blog from "./components/Blog";
import { posts } from "./data/data";

function App() {
  return (
    <>
      <Blog list={posts} />
    </>
  );
}

export default App;
