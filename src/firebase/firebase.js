import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDsqZRXIy6alKvd0TiO4NgZNxjhRfRizUM",
  authDomain: "dsinnovators-83c1b.firebaseapp.com",
  databaseURL: "https://dsinnovators-83c1b.firebaseio.com",
  projectId: "dsinnovators-83c1b",
  storageBucket: "dsinnovators-83c1b.appspot.com",
  messagingSenderId: "442679760238"
};

if(!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();

export {
  db
};
