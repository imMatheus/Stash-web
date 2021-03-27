import React, { useEffect } from 'react'
import StashesOverview from './components/stashesOverview/StashesOverview'
import LoadingSpinner from './components/LoadingSpinner'
import './global.css'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth'
// import { useCollection } from 'react-firebase-hooks/firestore'

firebase.initializeApp({
    apiKey: 'AIzaSyBNT7WVhLLZP_PyO43P42qeI7J4Uxpxj54',
    authDomain: 'stash-a4a02.firebaseapp.com',
    projectId: 'stash-a4a02',
    storageBucket: 'stash-a4a02.appspot.com',
    messagingSenderId: '100416684378',
    appId: '1:100416684378:web:0b75f272c1f47bf0fc3363',
    measurementId: 'G-KH0G32XZK3',
})
export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const products = firestore.collection('users')

const App = () => {
    const [user, loading] = useAuthState(auth)

    const signOutHandler = () => {
        auth.signOut()
        firebase
            .firestore()
            .clearPersistence()
            .catch((error) => {
                console.error('Could not enable persistence:', error.code)
            })
    }
    return (
        <>
            {loading ? (
                <LoadingSpinner />
            ) : (
                <div className='App'>
                    {user ? (
                        <>
                            <div className='navbar'>
                                <h2>STASH</h2>
                                <div className='user'>
                                    <div className='circle' style={{ backgroundImage: `url(${user.photoURL})` }}></div>
                                    <h3>Welcome {user.displayName}</h3>
                                    {auth.currentUser && (
                                        <button className='btn' onClick={signOutHandler}>
                                            Sign Out
                                        </button>
                                    )}
                                </div>
                            </div>{' '}
                            <StashesOverview />
                        </>
                    ) : (
                        <Login />
                    )}
                </div>
            )}
        </>
    )
}

function Login() {
    const provider = new firebase.auth.GoogleAuthProvider()
    const signIn = (e) => {
        e.preventDefault()
        auth.signInWithPopup(provider).catch((error) => {
            alert(error.message)
        })
    }
    return (
        <>
            <div className='logincontainer'>
                <div className='login-btn'>
                    <h3>Welcome to stash</h3>
                    <h4>Please sign into google </h4>
                    <div className='btn' onClick={signIn}>
                        <ExitToAppIcon /> Sing in with Google
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
