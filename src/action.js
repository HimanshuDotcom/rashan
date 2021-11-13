import firestore from "./firebase";
import  {onSnapshot,doc, getDocs, addDoc, collection } from 'firebase/firestore';

export const fetchItems = () => {
    return async function (dispatch) {
        const d= collection(firestore, 'items')
        const mySnapshot =  await getDocs(d);
        // console.log('I AM CKJSDFJK')
        const items = [];
        mySnapshot.forEach(doc => {
              const data = doc.data();
              data['id'] = doc.id;
              items.push(data);
              }
        ) 
        console.log('items', items)

        dispatch({
        type: 'SET_ITEMS',
        payload: items
        })
    }
}
