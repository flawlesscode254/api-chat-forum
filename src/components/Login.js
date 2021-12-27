import React from 'react'

import {auth, provider} from "../Firebase"

function Login() {
    const login = () => {
        auth.signInWithPopup(provider)
    }
    return (
        <div>
            <button onClick={login}>Log In</button>
        </div>
    )
}

export default Login
