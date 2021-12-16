import SpeakersList from "./SpeakersList";
import SpeakersToolbar from "./SpeakersToolbar";

function Speakers({ data, theme, setTheme}){
    return (
        <>
            <SpeakersToolbar theme={theme} setTheme={setTheme} />
            <SpeakersList data={data} />
        </>
    )

}

export default Speakers;