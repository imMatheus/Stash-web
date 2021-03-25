import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: 'AIzaSyBNT7WVhLLZP_PyO43P42qeI7J4Uxpxj54',
    authDomain: 'stash-a4a02.firebaseapp.com',
    projectId: 'stash-a4a02',
    storageBucket: 'stash-a4a02.appspot.com',
    messagingSenderId: '100416684378',
    appId: '1:100416684378:web:0e43691e0ae569adfc3363',
})

export const auth = app.auth()
export default app
// import firebase from 'firebase'
// // import 'firebase/auth'

// var firebaseConfig = {
//     apiKey: 'AIzaSyBNT7WVhLLZP_PyO43P42qeI7J4Uxpxj54',
//     authDomain: 'stash-a4a02.firebaseapp.com',
//     projectId: 'stash-a4a02',
//     storageBucket: 'stash-a4a02.appspot.com',
//     messagingSenderId: '100416684378',
//     appId: '1:100416684378:web:0e43691e0ae569adfc3363',
//     measurementId: 'G-8JD1812NKB',
// }

// const firebaseApp = firebase.initializeApp(firebaseConfig)
// const auth = firebase.auth()
// const db = firebaseApp.firestore()
// const provider = new firebase.auth.GoogleAuthProvider()
// // firebase.analytics()

// export { auth, provider, db }

// apiKey: 'AIzaSyBNT7WVhLLZP_PyO43P42qeI7J4Uxpxj54',
// authDomain: 'stash-a4a02.firebaseapp.com',
// projectId: 'stash-a4a02',
// storageBucket: 'stash-a4a02.appspot.com',
// messagingSenderId: '100416684378',
// appId: '1:100416684378:web:0e43691e0ae569adfc3363',
// measurementId: 'G-8JD1812NKB',
