import React, {Component} from "react";
import { applyMiddleware, createStore } from 'redux';
// import thunk from 'redux-thunk';

const initialState = {
    items: [],
    loading: true,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_ITEMS':
            return {
                items: action.payload,
                loading: false
            }
        case 'DELETE_ITEM':
            return {
                ...state,
                items: state.items.filter(item => item.id != action.payload)
            }
        case 'ADD_ITEM':
            // const addData = async () => {const x = await addDoc(collection(firestore, 'items'), {
            //     name: 'hinma',
            //     cp: 12,
            //     sp: 123
            // })}
            // addData();
            return {
                ...state,
                // items: [action.payload, ...state.items]
            }
        case 'EDIT_ITEM':
            const newItems = [...state.items];
            const id = action.payload.id;
            newItems[id-1] = {...action.payload}
            return {
                ...state,
                items: newItems
            }  
        
        case 'SET_ITEM':
            return {
                ...state,
                items: action.payload
            }
        
        default:
            return state;
    }
}
const thunk = ({dispatch, getState}) => (next) => (action) => {
    if(typeof(action) === 'function') {
      console.log('I AM CALLfED', dispatch)
      action(dispatch);
      return;
    }
    next(action);
}
const store = createStore(reducer, applyMiddleware(thunk));
const Context = React.createContext();


export class Provider extends Component {

    // state = {
    //     items: [],
    //     loading: true,
    //     dispatch: action => this.setState(state => reducer(state,action))
    // };

    render() {
        return (
            <Context.Provider value={store}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

console.log(store);

export const Consumer = Context.Consumer;
