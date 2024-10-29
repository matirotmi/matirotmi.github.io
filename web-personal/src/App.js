import './App.css';
import Navbar from './sections/NavBar';
import About from './sections/AboutMe';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <section id="about"><About /></section>
        <section id="education"><Education /></section>
        <section id="experience"><Experience /></section>
        <section id="skills"><Skills /></section>
        <section id="footer"><Footer /></section>
      </main>
    </div>
  );
}

export default App;
