import React, { useState, useRef } from "react";
import Movie from './movie'

export default function MovieList() {
    const [movies, setMovies] = useState([
        {
            id: 1,
            title: "Första filmen",
            rating: 3
        }
    ])

    const inputRef = useRef();
    const ratingRef = useRef();

    function addMovie(event) {
        event.preventDefault()
        if (ratingRef.current.value !== "0" && inputRef.current.value !== "") {
            
            const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;

            setMovies([...movies, {
                id: newId,
                title: inputRef.current.value,
                rating: ratingRef.current.value
            }])

            inputRef.current.value = ""
            ratingRef.current.value = "0"
        } else {
            alert("Du måste ange både titel och betyg")
        }
    }

    function removeMovie(id) {
        setMovies(movies.filter((item) => item.id !== id));
    }

    return (
        <div>
            <form>
                <h2>Film lista</h2>
                <h3>Lägg till en film</h3>
                <input id="titel" ref={inputRef} placeholder="Titel här"></input>
                <select type="text" id="rating-field" ref={ratingRef}>
                    <option value="0">Välj betyg här..</option>
                    <option value="1">1</option>
                    <option value="2" >2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                
                <input type="submit" value="Spara film" onClick={addMovie}/>
            </form>
            <h2>Inlagda filmer</h2>
            <ul>
                { movies.map(movie => <Movie key={movie.id} item={movie} removeMovie={removeMovie}/>)}
            </ul>
        </div>
    )
}