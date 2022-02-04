import './App.css';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Content from './components/Content';

function App() {
  return (
    <div>
        <h1>Some Shizzle</h1>
        <p>Other Shizzle</p>
        <Navbar />
        <Jumbotron />
        <Footer />
        <Carousel />
        <Content />
    </div>
  );
}

export default App;