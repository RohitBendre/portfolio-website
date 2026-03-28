import { useEffect } from 'react';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
  useEffect(() => {
    const effectElement = document.createElement('div');
    effectElement.className = styles.rippleEffect;
    document.body.appendChild(effectElement);

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      effectElement.style.left = `${clientX}px`;
      effectElement.style.top = `${clientY}px`;
      effectElement.classList.add(styles.active);

      setTimeout(() => {
        effectElement.classList.remove(styles.active);
      }, 300);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeChild(effectElement);
    };
  }, []);

  return null;
}