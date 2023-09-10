import './App.css';
import Nav from './Component/Nav';
import Footer from './Component/Footer';
import Home from './Page/home/Home';
import Howitwork from './Page/howitwork/Howitwork';
import Howtouse from './Page/howtouse/Howtouse';
import Ourteam from './Page/ourteam/Ourteam';
import Contact from './Page/contact/Contact';
import Login from './Page/login/Login';

function App() {
  return (
    <div className="App">
      <Nav/>

      <Home/>
      <Howitwork/>
      <Howtouse/>
      <Ourteam/>
      <Contact/>
      <Login/>
      
      <Footer/>
    </div>
  );
}

export default App;
