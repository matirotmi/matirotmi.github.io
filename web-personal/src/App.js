import './App.css';
import Navbar from './sections/NavBar';
import About from './sections/AboutMe';
import Skills from './sections/Skills';
import Footer from './sections/Footer';
import HeroSection from './sections/HeroSection';
import ExperienceCarousel from './sections/ExperienceCarousel';

//TODO ELEGIR COLORES o IMAGEN de fondo, se ve todo muy blanco
//TO DO ELEGIR UNA BUENA TIPOGRAFIA

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <section id="hero"><HeroSection /></section>
        <section id="about"><About /></section>
        <section id="experience"><ExperienceCarousel /></section>
        <section id="skills"><Skills /></section>
        <section id="footer"><Footer /></section>
      </main>
    </div>
  );
}

export default App;
