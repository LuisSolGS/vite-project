export default function Entry(props) {
    //console.log(props);
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src={props.entry.img}
                />
            </div>
            <div className="info-container">
                <span className="country">{props.entry.country}</span>
                <a href={props.entry.googleMapsLink} target="_blank">View on IGDB</a>
                <h2 className="entry-title">{props.entry.title}</h2>
                <p className="trip-dates">{props.entry.dates}</p>
                <p className="entry-text">{props.entry.text}</p>
            </div>
            
        </article>
    )
}