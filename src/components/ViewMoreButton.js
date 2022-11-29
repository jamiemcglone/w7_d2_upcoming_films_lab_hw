import "./ViewMoreButton.css"

const ViewMoreButton = () => {

    const handleButtonClick = () =>{
        window.location = "https://www.imdb.com/calendar/?region=gb"
    }
    return(
        <div id="button">
            <button onClick={handleButtonClick}>
                View More Upcoming Releases >>
            </button>
        </div>
    )
}

export default ViewMoreButton;