import firebase from 'firebase'

const firebaseConfig = {
    apiKey: 'AIzaSyChdCbMB0bsC49tkf_LNKt6ix26cgL7s5Q',
    authDomain: 'slack-clone-ddf8e.firebaseapp.com',
    projectId: 'slack-clone-ddf8e',
    storageBucket: 'slack-clone-ddf8e.appspot.com',
    messagingSenderId: '732737925297',
    appId: '1:732737925297:web:46267252343179a805b290',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider, db }
