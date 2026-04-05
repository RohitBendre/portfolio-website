import { useEffect, useState } from 'react';
import styles from './Skills.module.css';

const skillsData = [
  { name: 'HTML', level: 'Advanced', width: 90 },
  { name: 'CSS', level: 'Advanced', width: 85 },
  { name: 'JavaScript', level: 'Advanced', width: 85 },
  { name: 'React', level: 'Intermediate', width: 80 },
  { name: 'Redux Toolkit', level: 'Intermediate', width: 80 },
  { name: 'Python', level: 'Advanced', width: 88 },
  { name: 'MongoDB', level: 'Intermediate', width: 75 },
  { name: 'MySQL', level: 'Intermediate', width: 80 },
  { name: 'Flask', level: 'Intermediate', width: 70 },
  { name: 'APIs', level: 'Intermediate', width: 65 },
  { name: 'Axios', level: 'Intermediate', width: 65 },
  { name: 'Git', level: 'Intermediate', width: 65 },
];

export default function Skills() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    });

    const section = document.getElementById('skills');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="skills" className={styles.skills}>
      <h2 className={styles.heading}>Skills</h2>
      {skillsData.map((skill, index) => (
        <div key={index} className={styles.skill}>
          <div className={styles.label}>
            <span>{skill.name}</span>
            <span className={`${styles.level} ${styles[skill.level.toLowerCase()]}`}>
             {skill.level}
            </span>
          </div>
          <div className={styles.progressBar}>
            <div
              className={`${styles.progressFill} ${visible ? styles.animate : ''}`}
              style={{
                width: visible ? `${skill.width}%` : '0%',
                animationDelay: `${index * 0.2}s`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
