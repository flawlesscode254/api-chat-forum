import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDcVwZ3ECLUB4TeMuK2OqMpUiTG7ZwkZp4",

    authDomain: "forum-chat-d462d.firebaseapp.com",
  
    projectId: "forum-chat-d462d",
  
    storageBucket: "forum-chat-d462d.appspot.com",
  
    messagingSenderId: "190661058381",
  
    appId: "1:190661058381:web:0789fc866aa5ee5faa2104"  

  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db  = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()


export { auth, provider }
export default db