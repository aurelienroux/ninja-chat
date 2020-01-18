import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDl0rDaBNXJf3cf6-8dzNVzp7r5PdKZNzM',
  authDomain: 'ninja-chat-71eaf.firebaseapp.com',
  databaseURL: 'https://ninja-chat-71eaf.firebaseio.com',
  projectId: 'ninja-chat-71eaf',
  storageBucket: 'ninja-chat-71eaf.appspot.com',
  messagingSenderId: '488553133318',
  appId: '1:488553133318:web:269612d055b27c8c5ada87'
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.firestore()
