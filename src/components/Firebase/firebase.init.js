import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjGkO15z31lTn6nnRBs6yxSNukqeJsxr8",
  authDomain: "jerins-parlour2.firebaseapp.com",
  projectId: "jerins-parlour2",
  storageBucket: "jerins-parlour2.appspot.com",
  messagingSenderId: "447206686340",
  appId: "1:447206686340:web:b5e8937a8cf989fb30ccd1",
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
