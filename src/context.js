import React, {Component} from "react";
import { act } from "react-dom/test-utils";

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_ITEM':
            return {
                ...state,
                items: state.items.filter(item => item.id != action.payload)
            }
        case 'ADD_ITEM':
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
        case 'EDIT_ITEM':
            const newItems = [...state.items];
            const id = action.payload.id;
            newItems[id-1] = {...action.payload}
            return {
                ...state,
                items: newItems
            }   
        
        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
        items: [
            {
                id: 1,
                name: "Sugar",
                cp: 36,
                sp: 38
            },
            {
                id: 2,
                name: "Bura",
                cp: 41,
                sp: 48
            }
        ],
        dispatch: action => this.setState(state => reducer(state,action))
    };

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
