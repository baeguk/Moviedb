import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CardsMovie from '../components/CardsMovie'
import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill,
} from "react-icons/bs";
import { FaRegCalendar } from "react-icons/fa";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState(null)

    const getMovie = async (url) => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            setMovie(data)
            console.log(setMovie)

        } catch (error) {
            console.log(error)
        }
    }

    const formatCurrency = (number) => {
        return number.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        });
    };

    useEffect(() => {
        const movieURL = `${moviesURL}${id}?${apiKey}`
        getMovie(movieURL)
    }, [])

    return (
        <div className='cardMovie'>
            {movie &&
                <div className='row'>
                    <div className="col">
                        <CardsMovie movie={movie} showLink={false} />
                    </div>
                    <div className="col">
                        <p className='tagline'>{movie.tagline}</p>
                        <div className='info'>
                            <h3>
                                <FaRegCalendar /> Release date:
                            </h3>
                            <p>{movie.release_date}</p>
                        </div>
                        <div className='info'>
                            <h3>
                                <BsWallet2 /> Budget: 
                            </h3>
                            <p>{formatCurrency(movie.budget)}</p>
                        </div>
                        <div className='info'>
                            <h3>
                                <BsGraphUp /> Revenue:
                            </h3>
                            <p>{formatCurrency(movie.revenue)}</p>
                        </div>
                        <div className='info'>
                            <h3>
                                <BsHourglassSplit /> Runtime:
                            </h3>
                            <p>{movie.runtime} min</p>
                        </div>
                        <div className='info'>
                            <h3>
                                <BsFillFileEarmarkTextFill /> Overview:
                            </h3>
                            <p>{movie.overview}</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Movie