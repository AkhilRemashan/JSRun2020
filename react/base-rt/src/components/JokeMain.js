import React from 'react'
import JokeQuestion from './JokeQuestion'
import jokesApi from '../assets/data/jokeApi'

function JokeMain(){

    const jokeNewApi = jokesApi.map((joke) => {
                            return <JokeQuestion 
                                        question={joke.question} 
                                        answer={joke.answer}
                                    />
                        })

    return(
        <div id="joke-main">
            {/* STATIC */}
            {/* <JokeQuestion 
                question="bhvahsabsdbasbfssfsdf"
                answer="sdfasf"
            />
            <JokeQuestion 
                question=""
                answer=""
            />
            <JokeQuestion 
                question=""
                answer=""
            />
            <JokeQuestion 
                question=""
                answer=""
            />
            <JokeQuestion 
                question=""
                answer=""
            /> */}

            {/* CALLING FROM JSON */}
            {jokeNewApi}
        </div>
    )
}

export default JokeMain