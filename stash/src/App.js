import React, { useState } from 'react'
import StashesOverview from './components/stashesOverview/StashesOverview'
import LoadingSpinner from './components/LoadingSpinner'
import './global.css'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

import { useCollection, useDocument } from 'react-firebase-hooks/firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'

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

// console.log(products)
// console.log(query)

// measurementId: 'G-8JD1812NKB',

const App = () => {
    const [user, loading] = useAuthState(auth)

    // const ref = firestore.collections('users')

    const query = products.orderBy('createdAt')
    const [messages] = useCollectionData(query, { idField: 'eKQXvbnl8OQ4Fq4b3rfV' })
    const [roomDetails] = useDocument(firestore.collection('test'))
    const [roomMessages, loading1] = useCollection(firestore.collection('test'))

    return (
        <>
            {loading ? (
                <LoadingSpinner />
            ) : (
                <div className='App'>
                    {user ? <StashesOverview /> : <Login />}
                    {/* <StashesOverview /> */}
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
                    <h4>Please sign in to google </h4>
                    <div className='btn' onClick={signIn}>
                        <ExitToAppIcon /> Sing in with Google
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
