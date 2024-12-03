import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCigxfy5fiVyhildB5m64LkI5HTbysWb6A',
  authDomain: 'beesync-6f427.firebaseapp.com',
  projectId: 'beesync-6f427',
  storageBucket: 'beesync-6f427.firebasestorage.app',
  messagingSenderId: '569074197497',
  appId: '1:569074197497:web:6362dc892fc8dc63279328',
};

firebase.initializeApp(firebaseConfig);

export { firebase };
