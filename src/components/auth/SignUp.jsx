import React, {Component} from "react";
import {connect} from "react-redux";
import {signUp} from "../../actions/authActions";
import {Link, Redirect} from "react-router-dom";
import "./SignUp.css"

class SignUp extends Component{
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
        this.props.signUp(this.state)
    }

    render(){
        const{uid}=this.props
        if(uid) return <Redirect to='/'/>
        return(
            <>
                <section className="signUp">
                <form
                    className="signUpContainer"
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
                    <button type="submit" className="signUp-button">
                        Sign Up
                    </button>
                        <div className="linkToLogin">Already have an account ? <Link to='login' className="buttonToLogin">Login<Link/></Link></div>
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
        signUp:(creds)=>dispatch(signUp(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)