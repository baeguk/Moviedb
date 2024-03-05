import { useState, useEffect } from "react"

import CardsMovie from "../components/CardsMovie"

const moviesURL = import.meta.env.VITE_API
const apikey = import.meta.env.VITE_API_KEY

const Home = () => {
    const [movies, setMovies] = useState([])

    const FetchData = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=eb3f5c0f2f984820833c0286251d3b14`)
            const data = await response.json()
            setMovies(data.results)
            console.log(setMovies)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

        const PopularUrl = `${moviesURL}popular?${apikey}`;
        console.log(PopularUrl)
        FetchData(PopularUrl)
    }, []);
    return (
        <div>
            <h2>Popular Movies:</h2>
            <div className='cards'>
                {movies.length === 0 && <p>loading...</p>}
                {movies.length > 0 &&
                    movies.map((movie) => <CardsMovie key={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}

export default Home