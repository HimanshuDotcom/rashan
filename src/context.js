import React, {Component} from "react";

const Context = React.createContext();

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
        ]
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
