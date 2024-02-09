import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Page404 from "./components/Page404";
import User from "./components/User";
import Contact from "./components/Contact";
import Contact1 from "./shared/Contact1";
import Contact2 from "./shared/Contact2";
import Login from "./components/Login";
import Protected from "./components/Protected";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Protected Components={Home}/>}></Route>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* go to page 404 */}
          {/* <Route path='/*' element={<Page404/>}></Route> */}
          <Route path="/*" element={<Navigate to="/" />}></Route>
          {/* using parms */}
          <Route path="/user/:name" element={<User />}></Route>
          {/* nested rounting */}
          <Route path="/contact/" element={<Contact />}>
            <Route path="contact1" element={<Contact1 />} />
            <Route path="contact2" element={<Contact2 />} />
          </Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
