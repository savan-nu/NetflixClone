import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from '../Context/AuthContext';
export default function PrivateRoutes() {
    const {isLogin, setIsLogin} = useContext(AuthContext);
    console.log(isLogin);
  return (
    <>
       {isLogin ? <Outlet/> :<Navigate to = "/signin" replace = {true} /> }
    </>
  );
}
