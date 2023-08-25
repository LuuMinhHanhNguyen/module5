import "./App.css";
import Main from "./components/Main";
import UpdateRoom from "./components/UpdateRoom";
import UpdateCustomer from "./components/UpdateCustomer";
import ListCustomer from "./components/ListCustomer";
import CreateCustomer from "./components/CreateCustomer";
import CreateContract from "./components/CreateContract";
import CreateRoom from "./components/CreateRoom";
import { Route, Routes } from "react-router-dom";
import PageLayout from "./components/PageLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<PageLayout children={<Main />} />}></Route>
          <Route
            path="/customers"
            element={<PageLayout children={<ListCustomer />} />}
          ></Route>
          <Route
            path="/customers/edit/:id"
            element={<PageLayout children={<UpdateCustomer />} />}
          ></Route>
          <Route
            path="/customers/create"
            element={<PageLayout children={<CreateCustomer />} />}
          ></Route>
          <Route
            path="/facilities/create"
            element={<PageLayout children={<CreateRoom />} />}
          ></Route>
          <Route
            path="/facilities/edit/:id/:name"
            element={<PageLayout children={<UpdateRoom />} />}
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
