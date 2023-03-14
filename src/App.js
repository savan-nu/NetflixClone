import "./App.css";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/HomePage/Home";
import Index from './Components/Index/Index';
import SingIn from "./Components/Forms/SingIn"
function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/movie" element = { <Home/> } />
        <Route path="/" element = {<Index /> } />
        <Route path="/signin" element = {<SingIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
