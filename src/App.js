import "./App.css";

import { MovieIdProvider } from "./Components/context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/HomePage/Home";
import Index from './Components/Index/Index';

function App() {
  

  return (

    <MovieIdProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/movie" element = { <Home/> } />
        <Route path="/" element = {<Index /> } />
      </Routes>
    </BrowserRouter>
     
    </MovieIdProvider>
   
  );
}

export default App;
