import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyBzv1Cm43oTK8jYQ7d8oJpnKhJJQdXJZPA",
    authDomain: "layers-photography.firebaseapp.com",
    projectId: "layers-photography",
    storageBucket: "layers-photography.appspot.com",
    messagingSenderId: "772642617290",
    appId: "1:772642617290:web:447fd3e9a83f91de858133"
};

const app = initializeApp(firebaseConfig);
export default app