import './css/styles.css'

import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import Search from './pages/Search';

function App() {

  return (
    <>
    <Navbar />
    <Outlet />

    </>
  )
}

export default App
