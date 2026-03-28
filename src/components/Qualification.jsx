import styles from './Qualification.module.css';

export default function Qualification() {
  return (
    <div className={styles.qualification}>
      <h2 className={styles.title}>Qualification</h2>
      <div className={styles.timeline}>
        <div className={styles.entry}>
          <div className={styles.circle}></div>
          <div className={styles.content}>
            <h3>Master's in Technology</h3>
            <p>Vidyalankar Institute of Technology</p>
            <span>2023 – Present</span>
          </div>
        </div>

        <div className={styles.entry}>
          <div className={styles.circle}></div>
          <div className={styles.content}>
            <h3>Computer Engineering</h3>
            <p>University of Mumbai</p>
            <span>2017 – 2022</span>
          </div>
        </div>

        <div className={styles.entry}>
          <div className={styles.circle}></div>
          <div className={styles.content}>
            <h3>HSC</h3>
            <p>Maharashtra State Board</p>
            <span>2016 – 2017</span>
          </div>
        </div>

        <div className={styles.entry}>
          <div className={styles.circle}></div>
          <div className={styles.content}>
            <h3>SSC</h3>
            <p>Maharashtra State Board</p>
            <span>2014 – 2015</span>
          </div>
        </div>
      </div>
    </div>
  );
}
