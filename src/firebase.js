import { initializeApp } from "firebase/app";
import  {intializeFirestore, getFirestore,setDoc, getDocs, onSnapshot,doc, getDoc,addDoc, collection } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD7E1hBJMMWRjvJgZLoVi7DMwDBjVPqqqY",
    authDomain: "rashan-bdbc2.firebaseapp.com",
    projectId: "rashan-bdbc2",
    storageBucket: "rashan-bdbc2.appspot.com",
    messagingSenderId: "669666473810",
    appId: "1:669666473810:web:3f96a8c15bff9c29376c8b"
  };

  const app = initializeApp(firebaseConfig);
  const firestore = getFirestore();

  export async function getData() {
    // const mySnapshot = await getDocs(collection(firestore, "items"));
    const items =  [];
   
    const d= collection(firestore, 'items')
    // addDoc(d, {
    //     name: 'ref',
    //     cp: 15,
    //     sp: 155
    // });
    // const mySnapshot =  await getDocs(d);
    // mySnapshot.forEach((doc) => {
    //     const data = doc.data();
    //     data['id'] = doc.id;
    //     items.push(data);
    // })
    // mySnapshot.docs.map(doc => {
    //     const data = doc.data();
    //     data['id'] = doc.id;
    //     items.push(data);
    // })

    // return items;
  }
//   getData();

  

export default firestore;