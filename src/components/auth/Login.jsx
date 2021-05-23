import React, {Component} from "react";
import {login} from "../../actions/authActions";
import {connect} from "react-redux";
import {Link, Redirect} from 'react-router-dom';
import "./Login.css"

class Login extends Component{
    state ={
        email:"",
        password:"",
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        console.log(this.state)
        this.props.login(this.state)
    }

    render(){
        const{uid}=this.props
        if(uid) return <Redirect to='/'/>
        return(
            <>
                <section className="login">
            <form
                className="loginContainer"
                autoComplete="off"
                onSubmit={this.handleSubmit}
            >
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="btnContainer">
                <button type="submit" className="login-button">
                    Login
                </button>
                    <div className="linkToSignUp">Don't have an account ? <Link to='signup' className="buttonToSignUp">Sign Up<Link/></Link></div>
                </div>
            </form>
                </section>
            </>
        )

    }
}

const mapStateToProps=(state)=>{
    console.log(state)
    const uid=state.firebase.auth.uid
    return{
        uid:uid
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        login:(creds)=>dispatch(login(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)