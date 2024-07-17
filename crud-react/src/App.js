import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
import NoMatch from "./components/nomatch/noMatch";
import PostCardata from "./components/postCardata/postCardata";
import UpdateCardata from "./components/updateCardata/updateCardata";
import Header from "./components/header/header";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}></Route>
        <Route path="/car" element={<PostCardata></PostCardata>}></Route>
        <Route
          path="/car/:id"
          element={<UpdateCardata></UpdateCardata>}
        ></Route>
        <Route path="*" element={<NoMatch></NoMatch>}></Route>
      </Routes>
    </>
  );
}

export default App;
