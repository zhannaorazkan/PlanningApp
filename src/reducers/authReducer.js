const authReducer=(state={}, action)=>{
    switch (action.type){
        case "LOGIN":
            console.log("welcome back")
            return state
        case "LOGIN_ERR":
            console.log("login error")
            return state

        case "SIGN_OUT":
            console.log("signed out")
            return state

        case "SIGN_UP":
            console.log("welcome")
            return state
        case "SIGN_UP_ERR":
            console.log("signup error")
            return state
        default: return state

    }
}

export default authReducer