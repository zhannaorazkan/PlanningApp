export const login=creds=>{
    return(dispatch, getState, {getFirebase})=>{
        const firebase=getFirebase();

        firebase
            .auth()
            .signInWithEmailAndPassword(creds.email, creds.password)
            .then(()=>{
                dispatch({type: "LOGIN"})
            })
            .catch(err=>{
                dispatch({type:"LOGIN_ERR"})
            })
    }
}


export const signOut=creds=>{
    return(dispatch, getState, {getFirebase})=>{
        const firebase=getFirebase();

        firebase
            .auth()
            .signOut()
            .then(()=>{
                dispatch({type: "SIGN_OUT"})
            })

    }
}

export const signUp=creds=>{
    return(dispatch, getState, {getFirebase})=>{
        const firebase=getFirebase();

        firebase
            .auth()
            .createUserWithEmailAndPassword(creds.email, creds.password)
            .then(()=>{
                dispatch({type: "SIGN_UP"})
            })
            .catch(err=>{
                dispatch({type:"SIGN_UP_ERR"})
            })
    }
}