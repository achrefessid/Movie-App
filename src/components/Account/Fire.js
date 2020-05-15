import firebase from 'firebase';

const config = {
        apiKey: "AIzaSyDN1MTZSB5sgBcfgR7ewzvcuA5A2Wfubc8",
        authDomain: "movie-app-84b1b.firebaseapp.com",
        databaseURL: "https://movie-app-84b1b.firebaseio.com",
        projectId: "movie-app-84b1b",
        storageBucket: "movie-app-84b1b.appspot.com",
        messagingSenderId: "357483216779",
        appId: "1:357483216779:web:976fc47c5797d4ee9df98e",
        measurementId: "G-VMSZ3RJQTW"
      };

const fire = firebase.initializeApp(config);

export default fire;


