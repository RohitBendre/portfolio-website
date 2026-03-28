import { useEffect, useState } from 'react';
import styles from './Skills.module.css';

const skillsData = [
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 80 },
  { name: 'Python', level: 88 },
  { name: 'MongoDB', level: 75 },
  { name: 'MySQL', level: 80 },
  { name: 'PostgreSQL', level: 70 },
  { name: 'Firebase', level: 65 },
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
            <span>{visible ? `${skill.level}%` : ''}</span>
          </div>
          <div className={styles.progressBar}>
            <div
              className={`${styles.progressFill} ${visible ? styles.animate : ''}`}
              style={{
                width: visible ? `${skill.level}%` : '0%',
                animationDelay: `${index * 0.2}s`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
