import './home-page.css';
import appImage from '../../Assets/images/app.jpg';

function HomePage() {
    return (
      <div>
          <div className="container">
         <img src={appImage} className='appImage' alt="app image" />
            <div className="appImage">
            <h1>Looking for App Developers in Toronto?</h1>
            <h4>A Digital Innovation Workplace, where technical solutions are skillfully crafted and achieved. We deliver solutions that are created with Integrity, Passion, and Excellence.</h4>
          </div>
        </div>
      </div>
    )
}

export default HomePage