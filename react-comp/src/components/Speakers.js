import React, { useState } from "react";
import SpeakersList from "./SpeakersList";
import SpeakersToolbar from "./SpeakersToolbar";

function Speakers({ data, theme, setTheme}){
    const [showSessions, setShowSessions] = useState(true); // set initial value

    return (
        <>
            <SpeakersToolbar theme={theme} setTheme={setTheme} 
                showSessions={showSessions} setShowSessions={setShowSessions}/>
            <SpeakersList data={data} showSessions={showSessions}/>
        </>
    )

}

export default Speakers;