import React from 'react'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import CardsMovie from '../components/CardsMovie'

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
    const [searchParams] = useSearchParams()

    const [movies, setMovies] = useState([])
    const query = searchParams.get('q')

    const getSearchedMovies = async (url) => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            setMovies(data.results)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

        const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
        getSearchedMovies(searchWithQueryURL)
    }, [query]);

    return (
        <div>
            <h2>Results for:
                <span className='query-text'>
                    { query}
                </span>
            </h2>
            <div className='cards'>
                {movies.length === 0 && <p>Loading...</p>}
                {movies.length > 0 &&
                    movies.map((movie) => <CardsMovie key={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}

export default Search