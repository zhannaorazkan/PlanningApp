import React from "react";
import {Link} from "react-router-dom";
import NavItems from "./NavItems";
import {connect} from "react-redux";

const Navbar=()=>{
    return(
        <>
            <nav className="navbar navbar-light bg-light d-flex justify-content-center">
                <Link to="/" className="navbar-brand">
                    <h3>PlanningApp</h3>
                </Link>
                <NavItems/>
            </nav>
        </>
    )
}

const mapStateToProps=(state)=>{
    console.log(state)
}

export default connect(mapStateToProps)(Navbar)