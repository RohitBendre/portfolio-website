import Sidebar from './components/Sidebar';
import About from './components/About';
import Skills from './components/Skills';
import Qualification from './components/Qualification';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import styles from './App.module.css';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <><CustomCursor />
    <div className={styles.container}>
      <div className={styles.sidebar}>
      <Sidebar />
      </div>
      <main className={styles.main}>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="qualification"><Qualification /></section>
        <section id="projects"><Projects /></section>
        <Footer />
      </main>
    </div>
    </>
  );
}

export default App;
