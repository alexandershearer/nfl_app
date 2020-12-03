import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/footer';
import Home from './components/Home/home';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" component={Home} />
        {/* <Route path="/News" component={ } />
      <Route path="/" component={ } /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
