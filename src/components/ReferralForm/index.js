import {FaCopy} from 'react-icons/fa'
import './index.css'

const ReferralForm = () => (
  <div className="referral-form">
    <div>
      <h1 className="referral-head">Your Referral Link</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="https://gobusiness.com/?refferal=ABCXYZ"
          className="input-link-element"
        />
        <button className="copy-button" type="button">
          <FaCopy className="copy-icon" />
          <p>Copy</p>
        </button>
      </div>
    </div>
    <div>
      <h1 className="referral-head">Your Referral Link</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="ABCXYZ"
          className="input-code-element"
        />
        <button className="copy-button" type="button">
          <FaCopy className="copy-icon" />
          <p>Copy</p>
        </button>
      </div>
    </div>
  </div>
)

export default ReferralForm
