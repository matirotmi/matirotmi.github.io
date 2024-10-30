import './App.css';
import Navbar from './sections/NavBar';
import About from './sections/AboutMe';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Footer from './sections/Footer';
import HeroSection from './sections/HeroSection';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <section id="hero"><HeroSection /></section>
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
        <section id="skills"><Skills /></section>
        <section id="footer"><Footer /></section>
      </main>
    </div>
  );
}

export default App;
