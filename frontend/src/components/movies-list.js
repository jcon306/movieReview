import React, { useState, useEffect } from 'react'
import MovieDataService from "../services/movies"
import { Link } from "react-router-dom"


function MoviesList() {

    const MoviesList = props => {
        const [movies, setMovies] = useState([])
        const [searchTitle, setSearchTitle] = useState("")
        const [searchRating, setSearchRating] = useState("")
        const [ratings, setRatings] = useState(["All Ratings"])

        useEffect(() => {
            retrieveMovies()
            retrieveRatings()
        }, [])

        const retrieveMovies = () => {
            MovieDataService.getAll()
                .then(response => {
                    console.log(response.data)
                    setMovies(response.data.movies)
                })
                .catch(e => {
                    console.log(e)
                })
        }
    }

    return (
        <div className="App">
            Movies List
        </div>
    );
}

export default MoviesList