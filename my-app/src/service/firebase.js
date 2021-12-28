import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyDR_5LyUdjCtntiI4MBN2Xi7MFpupN-2J8",
  
    authDomain: "commerce-86db2.firebaseapp.com",
  
    projectId: "commerce-86db2",
  
    storageBucket: "commerce-86db2.appspot.com",
  
    messagingSenderId: "204531223459",
  
    appId: "1:204531223459:web:a131634fc2275a085a2816",
  
    measurementId: "G-0X6V42LZXS"
  
  };
  
  const app = initializeApp(firebaseConfig)

 export const db = getFirestore(app)