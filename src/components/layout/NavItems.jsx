import React from "react";
import {Link} from "react-router-dom";
import {signOut} from "../../actions/authActions";
import {connect} from "react-redux";
import '../sidebar/Sidebar.css'

const NavItems=({signOut, uid})=>{
    if(uid){
        return (
            <div className="icon1">
            <Link to="/login"
            >
                <span
                    className="material-icons"
                    style={{color:"white"}}
                  onClick={signOut}
                >
                logout
                </span>
            </Link>
                </div>
        )
    }else{
        return(
            <>
                <Link to="/signup" className="nav-link">
                    Sign Up
                </Link>
                <Link to="/login" className="nav-link">
                    Login
                </Link>
            </>
        )
    }
}

const mapStateToProps=state=>{
    const uid=state.firebase.auth.uid
    return{
        uid:uid
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        signOut: ()=>dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (NavItems)