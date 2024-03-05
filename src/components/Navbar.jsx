import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [search, setSearch] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!search) return

        navigate(`/search?q=${search}`)
        setSearch('')
    }

    return (
        <div>
            <div className="navbar">
                <Link to='/' className='title'>
                    <h1>Movies</h1>
                </Link>
                <span>Welcome</span>
            </div>
            <div className='search' >
                <form action="" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder='Search for movies'
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                    />
                    <button type='submit'>Search</button>
                </form>
            </div>
        </div>
    )
}

export default Navbar