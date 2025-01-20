import YoutubeEmbed from "./youtubeEmbed";

export default function GamePage(props) {
    console.log(props.entry);
    const myDate = new Date(props.entry.release_date * 1000);
    return (
        <>
        <div className="game-container">
            <h1>{props.entry.title}</h1>
            <h3>{myDate.toDateString()}</h3>
            <div className="game-main">
                <img 
                    className="game-image"
                    src={props.entry.img}
                />
                <YoutubeEmbed 
                    embedId={props.entry.video} 
                 />
            </div>
            <div className="game-info">
                <p>Genre: {props.entry.genre}</p>
                <p>Platforms: {props.entry.platforms}</p>
                <p>{props.entry.summary}</p>
            </div>
            <div className="game-story">
                <h2>Story</h2>
                <p>{props.entry.storyline}</p>
            </div>
        </div>
        </>
    )
}