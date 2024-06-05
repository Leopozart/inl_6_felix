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
            
            const newId = movies.length > 0 ? Math.max(...movies.map(movie => movie.id)) + 1 : 1; 

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

    function sortMovies(by) {
        let sortedMovies = [];
        if (by === "rating") {
            sortedMovies = [...movies].sort(function(a, b){return b.rating - a.rating})
        } else if (by === "title") {
            sortedMovies = [...movies].sort(function(a, b){return a.title.localeCompare(b.title)})
        }

        setMovies(sortedMovies)
    }

    return (
        <div className="container">
            <h2>Film lista</h2>
            <h3>Lägg till en film</h3>
            <form>
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
            <input className="button" onClick={() => sortMovies('rating')} type="button" value="Betyg" />
            <input className="button" onClick={() => sortMovies('title')} type="button" value="Titel" />
            <ul>
                { movies.map(movie => <Movie key={movie.id} item={movie} removeMovie={removeMovie}/>)}
            </ul>
        </div>
    )
}