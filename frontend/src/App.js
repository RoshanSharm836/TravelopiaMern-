import { Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./component/Form";
import DisplayData from "./component/DisplayData";
import Nav from "./component/Nav";
import Pagenotfound from "./component/Pagenotfound";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/display" element={<DisplayData />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </div>
  );
}

export default App;
