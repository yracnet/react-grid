import './YourApp.scss';
import { Navbar } from '_/components/Navbar';
import { Home } from './home';

// Rename YourApp to [Project Name]App
function YourApp() {
  return (
    <div className="YourApp">
      <Navbar name="Your App" />
      <div className="container my-2">
        <Home />
      </div>
    </div>
  );
}

export default YourApp;
