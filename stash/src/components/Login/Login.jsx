import React from 'react'
import { auth, provider } from '../../firebase'

function Login() {
    const signIn = (e) => {
        e.preventDefault()
        auth.signInWithPopup(provider).catch((error) => {
            alert(error.message)
        })
    }
    return (
        <>
            <div onClick={signIn}>login</div> <p></p>
            <p></p>
            <p></p>
        </>
    )
}

export default Login
