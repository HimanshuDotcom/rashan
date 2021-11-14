import firestore from "./firebase";
import  {onSnapshot,doc, getDocs, addDoc, deleteDoc, collection, setDoc } from 'firebase/firestore';

export const setItems = (items) => ({
    type: 'SET_ITEMS',
    payload: items
})

export const fetchItems = () => {
    return async function (dispatch) {
        const d= collection(firestore, 'items')
        const mySnapshot =  await getDocs(d);
        const items = [];
        mySnapshot.forEach(doc => {
              const data = doc.data();
              data['id'] = doc.id;
              items.push(data);
              }
        ) 
        console.log('items', items)

        dispatch(setItems(items));
    }
}

export const addToItems = (item) => {
    return async function (dispatch) {
        const x = await addDoc(collection(firestore, 'items'), item);
    }
}

export const deleteFromItems = (id) => {
    return async function (dispatch) {
        const x = await deleteDoc(doc(firestore,'items',id));
    }
}

export const editFromItems = (item) => {
    return async function (dispatch) {
        const x = await setDoc(doc(firestore,'items',item.id), item);
    }
}
