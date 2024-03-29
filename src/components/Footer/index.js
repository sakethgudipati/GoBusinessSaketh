import {AiFillLinkedin, AiOutlineInstagram} from 'react-icons/ai'
import {CgFacebook} from 'react-icons/cg'
import './index.css'

const Footer = () => (
  <div className="footer-container">
    <div className="footer-link-container">
      <div>
        <h1 className="link-head">COMPANY</h1>
        <p>About</p>
        <p>Premium</p>
        <p>Blog</p>
        <p>Referral Program</p>
      </div>
      <div>
        <h1 className="link-head">HELP AND SUPPORT</h1>
        <p>Contact Us</p>
        <p>Knowledge Center</p>
        <p>Blog</p>
        <p>Premium Support</p>
      </div>
      <div>
        <h1 className="link-head">LEARNING</h1>
        <p>Learn Hub</p>
        <p>Tutorials</p>
        <p>Communities</p>
      </div>
      <div>
        <h1 className="link-head">RESOURCES</h1>
        <p>Third-Party Tools</p>
        <p>Illustrations</p>
        <p>Stock Photos</p>
      </div>
      <div>
        <h1 className="link-head">LEGAL</h1>
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
        <p>EULA</p>
      </div>
    </div>
    <div className="logo-footer">
      <img
        src="https://res.cloudinary.com/defacaof3/image/upload/v1711692110/Group_2182_u6goj4.png"
        className="footer-logo"
        alt="logo"
      />
      <p>© 2024 Go Business, Inc. All rights reserved.</p>
      <div className="icon-container">
        <AiFillLinkedin className="footer-icon" />
        <CgFacebook className="footer-icon" />
        <AiOutlineInstagram className="footer-icon" />
      </div>
    </div>
  </div>
)

export default Footer
