import {AiOutlineSearch, AiOutlineDown} from 'react-icons/ai'
import './index.css'

const SearchBar = () => (
  <div className="search-bar">
    <h1 className="search-head">Referral Dashboard</h1>
    <div className="search">
      <div className="search-icon">
        <AiOutlineSearch className="search-icon" />
      </div>
      <input type="search" className="search-input" placeholder="Search" />
    </div>
    <button className="search-button" type="button">
      Search
    </button>
    <img
      src="https://res.cloudinary.com/defacaof3/image/upload/v1711694719/Notifications_ojyjgl.png"
      className="notification-image"
      alt="notification"
    />
    <div className="profile-container">
      <img
        src="https://res.cloudinary.com/defacaof3/image/upload/v1711695862/d3e397d24a595ea622b9ce2fd684a473_qrbsf8.png"
        className="profile-img"
        alt="profile"
      />
      <div>
        <h1 className="name">Name</h1>
        <p className="admin">Admin</p>
      </div>
      <AiOutlineDown className="down-icon" />
    </div>
  </div>
)

export default SearchBar
