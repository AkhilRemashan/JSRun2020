import React from 'react'

function JokeQuestion(props){
    return(
        <div id="joke-question">
            <h5 style={{display: props.question ? 'block' : 'none'}}>Question: {<em>{props.question}</em>}</h5>
            <p style={{display: props.answer ? 'block' : 'none'}}>Answer: {props.answer}</p>
            <hr />
        </div>
    )
}


export default JokeQuestion