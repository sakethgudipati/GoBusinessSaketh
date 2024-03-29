import './index.css'

const Navbar = () => (
  <nav className="nav-bar">
    <img
      src="https://res.cloudinary.com/defacaof3/image/upload/v1711692110/Group_2182_u6goj4.png"
      className="logo"
      alt="logo"
    />
    <ul className="header-list">
      <li className="header-item">Home</li>
      <li className="header-item">About Us</li>
      <li className="header-item">Courses</li>
      <li className="header-item">Projects</li>
      <li className="header-item">Contact</li>
    </ul>
    <button type="button" className="nav-button">
      Try for free
    </button>
  </nav>
)

export default Navbar
