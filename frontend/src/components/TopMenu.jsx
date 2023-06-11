import '../styles/TopMenu.scss';
import Profile from '../Auth0/profile';
import { Link } from "react-router-dom"

const TopMenu = () => {
  return (
    <div className='top-nav-bar--menu-list'>
      <div className='topic-list--item'>
        <span>
          <Link to="/">Home</Link>
        </span>
      </div>
      <div className='topic-list--item'>
        <span>
        <Link to="/exam">Test Exam</Link>
        </span>
      </div>
      <div className='topic-list--item'>
        <span>
        <Link to="/about">About Us</Link>
        </span>
      </div>
      <div className='topic-list--item'>
        <span>
        <Link to="/dashboard">Dashboard</Link>
        </span>
      </div>
    </div>
    
  )
}

export default TopMenu;