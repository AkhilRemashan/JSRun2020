import React from 'react'


class LogInforState extends React.Component {

    constructor() {
        super()
        this.state = {
            isLoggedIn : false
        }
    }

    render(){

        let displayStatus
        if (this.state.isLoggedIn === true){
            displayStatus = "-in"
        } else{
            displayStatus = "-out"
        }

        return(
            <div>
                <h4>Hey, you're logged{displayStatus}</h4>
            </div>
        )
    }


}


export default LogInforState