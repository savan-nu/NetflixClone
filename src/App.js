import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/HomePage/Home";
import Index from "./Screens/Index/Index";
import SingIn from "../src/Screens/Forms/SignIn/SignIn";
import SignUpDetails from "./Screens/Forms/SignUpDetails/SignUpDetails";
import PrivateRoutes from "./Utils/PrivateRoutes";
import { AuthProvider } from "./Context/AuthContext";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signin" element={<SingIn />} />
          <Route path="/signup" element={<SignUpDetails />} />
          <Route path="/user" element={<PrivateRoutes />}>
            <Route path="movie" element={<Home />} options={{ headerBackVisible:false}}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
