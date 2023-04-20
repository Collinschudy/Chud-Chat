import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';



const firebaseConfig = {
  apiKey: "AIzaSyA09uuIQnQ1i5NWAwPAvl0tdFeRnbyYC34",
  authDomain: "chud-chat.firebaseapp.com",
  projectId: "chud-chat",
  storageBucket: "chud-chat.appspot.com",
  messagingSenderId: "446923654998",
  appId: "1:446923654998:web:b959b1ebde9a8187ac78f7"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app)

