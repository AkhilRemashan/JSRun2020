import React from 'react'

// function SchoolProductItems(props){
//     return(
//         <div>
//             <h4>{props.product.name}</h4>
//         </div>
//     )
// }

class SchoolProductItems extends React.Component{
    render(){
        return(
            <div>
                <h4>{this.props.product.name}</h4>
                <p>{this.props.product.description}</p>
            </div>
        )
    }
}

export default SchoolProductItems