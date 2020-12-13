import React from 'react'

class CountingStars extends React.Component{
    constructor() {
        super()
        this.state = {
            counter: 0
        }
        // Binding func to the parent Class
        // this.handleClick =  this.handleClick.bind(this)
    }

    changeState() {
        // console.log("hey'yah!")
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
        // this.state.count++
    }

    render() {
        return(
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.changeState}>Count Star!</button>
            </div>
        )
    }
}


export default CountingStars