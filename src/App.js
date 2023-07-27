import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/home";
import Login from "./components/login";
import PageNotfound from "./components/pagenotfound";
import SignUp from "./components/signup";
import FormCreatingpage from "./components/formcreatingpage";

import "./App.css";
import "./style/login.css";
import "./style/pagenotfound.css";
import "./style/home.css";
import "./style/formcreatingpage.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/createnewformpage" Component={FormCreatingpage} />
        <Route path="*" Component={PageNotfound} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
