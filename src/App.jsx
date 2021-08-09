import { FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';
import Icon from './components/Icon';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="counter-container">
        <Icon icon={<FaTwitter />} size="3rem" />
        <div className="counter" data-target="12000" />
        <span>Twitter Followers</span>
      </div>
      <div className="counter-container">
        <Icon icon={<FaYoutube />} size="3rem" />
        <div className="counter" data-target="5000" />
        <span>YouTube Subscribers</span>
      </div>
      <div className="counter-container">
        <Icon icon={<FaFacebook />} size="3rem" />
        <div className="counter" data-target="7500" />
        <span>Facebook Fans</span>
      </div>
    </div>
  );
}

export default App;
