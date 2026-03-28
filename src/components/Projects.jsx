import styles from "./Projects.module.css";
import gridPageImg from "../assets/grid-page.png";
import marsImg from "../assets/mars.png";
import countryImg from "../assets/countries.png";
import weather from "../assets/weather-app.png";
import travel from "../assets/travel.png";
import emotional from "../assets/emotional.png";
import AiTool from "../assets/ai-tool.png";
import TODO from "../assets/too-do list.png";

export default function Projects() {
  return (
    <div className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.projectList}>
        <div className={styles.projectCard}>
          <a
            href="https://grid-page-tau.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            <img
              src={gridPageImg}
              alt="Grid Page Preview"
              className={styles.projectImage}
            />
            <div className={styles.projectOverlay}>
              <h3>Grid Page</h3>
              <p>A responsive grid layout project.</p>
            </div>
          </a>
        </div>

        <div className={styles.projectCard}>
          <a
            href="https://missionx.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            <img
              src={marsImg}
              alt="Grid Page Preview"
              className={styles.projectImage}
            />
            <h3>Grid Page</h3>
            <p>A responsive grid layout project.</p>
          </a>
        </div>

        <div className={styles.projectCard}>
          <a
            href="https://country-project-flame.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            <img
              src={countryImg}
              alt="Grid Page Preview"
              className={styles.projectImage}
            />
            <h3>Grid Page</h3>
            <p>A responsive grid layout project.</p>
          </a>
        </div>

        <div className={styles.projectCard}>
          <a
            href="https://weather-dashboard-nine-lovat.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            <img
              src={weather}
              alt="Grid Page Preview"
              className={styles.projectImage}
            />
            <h3>Grid Page</h3>
            <p>A responsive grid layout project.</p>
          </a>
        </div>

        <div className={styles.projectCard}>
          <a
            href="https://explore-konkan.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            <img
              src={travel}
              alt="Grid Page Preview"
              className={styles.projectImage}
            />
            <h3>Grid Page</h3>
            <p>A responsive grid layout project.</p>
          </a>
        </div>

        <div className={styles.projectCard}>
          <a
            href="https://emotion-music-app-beige.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectCard}
          >
            <img
              src={emotional}
              alt="Grid Page Preview"
              className={styles.projectImage}
            />
            <h3>Grid Page</h3>
            <p>A responsive grid layout project.</p>
          </a>
        </div>
        <div className={styles.projectCard}>
          <a
            href="https://docuchat-app-wine.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectCard}
          >
            <img
              src={AiTool}
              alt="Grid Page Preview"
              className={styles.projectImage}
            />
            <h3>Grid Page</h3>
            <p>A responsive grid layout project.</p>
          </a>
        </div>
        <div className={styles.projectCard}>
          <a
            href="https://too-do-list-nine.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectCard}
          >
            <img
              src={TODO}
              alt="Grid Page Preview"
              className={styles.projectImage}
            />
            <h3>Grid Page</h3>
            <p>A responsive grid layout project.</p>
          </a>
        </div>
        {/* Add more projects here */}
      </div>
    </div>
  );
}
