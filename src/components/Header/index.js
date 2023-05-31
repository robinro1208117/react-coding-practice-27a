// Write your JS code here
import '../LoginForm/index.css'
import './index.css'

const Header = () => (
  <div className="header">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      className="logo"
      alt="website logo"
    />
    <div className="nav-items">
      <div className="large">
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Cart</li>
        </ul>
        <button type="button">Logout</button>
      </div>
      <div className="small">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png "
          alt="nav home"
          className="icon"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png "
          alt="nav cart"
          className="icon"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png "
          alt="nav product"
          className="icon"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png "
          alt="nav logout"
          className="icon"
        />
      </div>
    </div>
  </div>
)

export default Header
