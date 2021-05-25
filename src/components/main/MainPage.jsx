import React, {Component} from "react";
import {connect} from "react-redux";
import {BrowserRouter, Redirect, Route, Switch, useRouteMatch} from "react-router-dom";
import './MainPage.css'
import Sidebar from "../sidebar/Sidebar";
import Clock from "../clock/Clock";
import Greeting from "../clock/Greeting";
import Weather from "../Weather/Weather";
import AddTask from "../task/AddTask";
import Task from "../task/Task";
import Tasks from "../task/Tasks";
import Calendar from "../Calendar";

const MainPage=({uid})=>{

    if(!uid) return <Redirect to='/login'/>
    return(
        <>
           <BrowserRouter>
               <Sidebar/>
<Switch>
    <Route path="/todo">
        <div className="todoContainer">
        <div className="todo-app">
        <AddTask/>
        <Tasks/>
    </div>
        </div>
    </Route>

    <Route path="/weather" component={Weather}/>
    <Route path="/calendar" component={Calendar}/>
               <div className="main">
                   <Clock/>
                   <Greeting/>
               </div>
</Switch>
            </BrowserRouter>

        </>
    )
}

const mapStateToProps=state=>{
    const uid=state.firebase.auth.uid
    return{
        uid:uid
    }
}

export default connect(mapStateToProps)(MainPage)