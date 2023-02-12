import './App.css';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import Hero from './components/Hero';
import About from './components/About';
import ClemBot from './components/ClemBot';

function App() {
  return (
    <div className='App'>
      <header className='sticky' style={{zIndex: `2`}}>
        <NavBar />
      </header>
      <Welcome />
      <Hero />
      <About />
      <ClemBot />
      <footer className="text-white bg-gray-600 p-4 italic text-center">
        &copy; {new Date().getFullYear()} Thomas Delvaux. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
