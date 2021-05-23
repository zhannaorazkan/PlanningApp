import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import MainPage from "./components/main/MainPage";
import Navbar from "./components/layout/Navbar";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import Sidebar from "./components/sidebar/Sidebar";

function App() {

  return (
    <>
      <BrowserRouter>

        <ToastContainer/>

          <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/" component={MainPage}/>
          </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
