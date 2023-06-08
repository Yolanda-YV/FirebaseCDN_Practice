// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBkGaR1gMpmOAku_5jM75di3dhdbrpf9Dw",
    authDomain: "practiceproject-32994.firebaseapp.com",
    projectId: "practiceproject-32994",
    storageBucket: "practiceproject-32994.appspot.com",
    messagingSenderId: "411294226548",
    appId: "1:411294226548:web:996b13e18d107c0cc6d921",
    measurementId: "G-EXGPFEYF54"
  };

// Initialize firebase
firebase.initializeApp(firebaseConfig);

// make auth firebase references
const auth = firebase.auth();
const db = firebase.firestore();
const analytics = firebase.analytics();