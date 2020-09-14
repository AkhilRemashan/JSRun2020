import React from 'react'

function JokeQuestion(props){
    return(
        <div id="joke-question">
            <h5>Question: {<em>{props.question}</em>}</h5>
            <p>Answer: {props.answer}</p>
            <hr />
        </div>
    )
}


export default JokeQuestion