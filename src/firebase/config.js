// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWV4VA-Uh0dLBwwDqbG7iEcbxsGxiqr1M",
  authDomain: "photo-gallery-b8aec.firebaseapp.com",
  projectId: "photo-gallery-b8aec",
  storageBucket: "photo-gallery-b8aec.appspot.com",
  messagingSenderId: "661117740790",
  appId: "1:661117740790:web:bcf1e769d5617f9189eed7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };