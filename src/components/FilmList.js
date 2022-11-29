import Film from "./Film";
import "./FilmList.css"

const FilmList = ({allFilms}) => {
    // Map round the films array

    const filmNodes = allFilms.map((film) => {
        return <Film key={film.id} filmObj={film}/>
    });

    return(
        <ul>
            {filmNodes}
        </ul>
    );
}

export default FilmList;