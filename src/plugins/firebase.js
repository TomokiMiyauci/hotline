import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyBB2UEknXR1-ePvnriWtTa8Klh-ZbKT3OE',
    authDomain: 'rooom-197f3.firebaseapp.com',
    databaseURL: 'https://rooom-197f3.firebaseio.com',
    projectId: 'rooom-197f3',
    storageBucket: 'rooom-197f3.appspot.com',
    messagingSenderId: '118824461026',
    appId: '1:118824461026:web:d53fc467aaf47d62'
  })
}

export default (context, inject) => {
  inject('firebase', firebase)
  inject('firestore', firebase.firestore())
  inject('auth', firebase.auth())
}
