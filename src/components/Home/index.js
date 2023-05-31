// Write your JS code here
import Header from '../Header/index'
import './index.css'
import '../LoginForm/index.css'

const Home = () => (
  <div className="home">
    <Header />
    <div className="homesection">
      <div className="text">
        <h1 className="title">Clothes that get YOU Noticed</h1>
        <p className="caption">
          Fashion is part of the daily air and it doesnot quite help that it
          changes all the time .Clothes always been marker of an era and we are
          in revolution .Your fashion makes you have been seen and heard the way
          you are.So celebrate new and exciting fashion on your own way.
        </p>
        <button>Shop now</button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png "
        alt="clothes that get you noticed"
        className="img-1"
      />
    </div>
  </div>
)

export default Home
