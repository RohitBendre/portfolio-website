import styles from './Sidebar.module.css';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>ROHIT BENDRE</div>
      <p className={styles.name}>Software Developer</p>
      <nav className={styles.nav}>
  <a href="#about">About</a>
  <a href="#skills">Skills</a>
  <a href="#qualification">Qualification</a>
  <a href="#projects">Projects</a>
      </nav>
      <div className={styles.socials}>
         <a href="https://github.com/RohitBendre" target="_blank" rel="noopener noreferrer">
        <FaGithub />
        </a>
        <a href="https://linkedin.com/in/rohit-bendre-965663213" target="_blank" rel="noopener noreferrer">
    <FaLinkedin />
 </a>
</div>
    </aside>
  );
}
