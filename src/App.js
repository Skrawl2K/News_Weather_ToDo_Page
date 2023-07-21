import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landingpage from './pages/Landingpage/Landingpage.jsx'
import Home from './pages/Home/Home.jsx';
import NewsDetails from './pages/NewsDetails/NewsDetails.jsx'
import WeatherDetails from './pages/WeatherDetails/WeatherDetails';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <>
      <Navbar />
      <section>
        <Router>
          <Routes>
            <Route path='/' element={<Landingpage />}> </Route>
            <Route path='/home' element={<Home />}> </Route>
            <Route path='/news' element={<NewsDetails />}></Route>
            <Route path='/weather' element={<WeatherDetails />}></Route>
          </Routes>
        </Router>
      </section>
      <Footer />
    </>
  );
}

export default App;
