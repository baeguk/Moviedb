import React from 'react'

import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const imageUrl = import.meta.env.VITE_IMG;

const CardsMovie = ({ movie, showLink = true }) => {
    return (
        <div>
            <div className='card'>
            <img src={imageUrl + movie.poster_path} alt={movie.title} />
                <h2>{movie.title}</h2>
                <span> <FaStar /> {movie.vote_average}</span>
                {showLink && <Link to={`/movie/${movie.id}`} className='button'>Details</Link>}
            </div>
        </div>
    )
}

export default CardsMovie