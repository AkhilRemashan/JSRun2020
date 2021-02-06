import React, {useEffect, useState} from 'react';
import './SidebarChat.css';
import { Avatar } from '@material-ui/core'

function SidebarChat() {
    
    /* 
        ** ${seed} => random integers/char helps generate different avatars in different instances
        ** const [seed, setSeed] = useState(""); => using the state, "seed" variable is modified by "setSeed"
        ** useEffect => this is a hook helps running logic when the component loads
        ** setSeed(Math.floor(Math.random() * 5000)); => generating random numbers for the "seed" to inject inside the url

    */
    const [seed, setSeed] = useState("");

    useEffect ( ()=> {

        setSeed(Math.floor(Math.random() * 5000));

        }, []
    );

    return(
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/gridy/${seed}.svg`}/>
            <div className="sidebarChat__info">
                <h2>Room name</h2>
                <p>Last message...</p>
            </div>
        </div>
    )
}

export default SidebarChat