import React, { Component } from 'react'

export default class Test extends Component {

    state = {
        count : 1
    }

    constructor() {
        super();
        console.log('Constructtor');
    }
    componentDidMount() {
        console.log('Mounting');
        // console.log(this.state);
        //////////////// React will merge these two and increase the count by 105
        // this.setState(prevState => {
        //     return {
        //         count: prevState.count + 100
        //     }
        // }, () => {
        //     console.log(this.state)
        // })
        // this.setState(prevState => {
        //     return {
        //         count: prevState.count + 5
        //     }
        // }, () => {
        //     console.log(this.state)
        // })
        this.setState({count: 10},() => {
            // this.setState({count: 1})
        })
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('prevState', prevState)
        console.log('currState', this.state)
    }
    handleClick = () => {

    }
    render() {
        return (
            <div>
                I am just for testing {this.state.count}
                <button onClick = {this.handleClick}>Change State</button>
            </div>
        )
    }
}
