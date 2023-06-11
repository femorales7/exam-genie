import '../styles/TopMenu.scss';
import Profile from '../Auth0/profile';

const TopMenu = () => {
  return (
    <div className='top-nav-bar--menu-list'>
      <div className='topic-list--item'>
        <span>
          <label>Results</label>
        </span>
      </div>
      <div className='topic-list--item'>
        <span>
          <label>Profile</label>
        </span>
      </div>
    </div>
    
  )
}

export default TopMenu;