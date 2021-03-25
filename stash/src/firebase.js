import firebase from 'firebase'

var firebaseConfig = {
    apiKey: 'AIzaSyBNT7WVhLLZP_PyO43P42qeI7J4Uxpxj54',
    authDomain: 'stash-a4a02.firebaseapp.com',
    projectId: 'stash-a4a02',
    storageBucket: 'stash-a4a02.appspot.com',
    messagingSenderId: '100416684378',
    appId: '1:100416684378:web:0e43691e0ae569adfc3363',
    measurementId: 'G-8JD1812NKB',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
// firebase.analytics()

export { auth, provider, db }
