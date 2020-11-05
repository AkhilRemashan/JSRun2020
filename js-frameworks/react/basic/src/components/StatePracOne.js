import React from 'react'

class StatePracOne extends React.Component {

    constructor () {
        super()
        this.state = {
            name: "Brasco",
            age: 57
        }
    }

    render(){
        return(
            <div>
                <h3>hello, my name is {this.state.name}</h3>
                <p>um, {this.state.age} years old</p>
            </div>
        )
    }

}


export default StatePracOne