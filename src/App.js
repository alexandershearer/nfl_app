import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/footer';
import Home from './components/Home/home';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
