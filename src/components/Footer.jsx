import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>

      <p>Designed and developed by Rohit Bendre. Built using React, Vite, and modern web technologies. Deployed on Vercel.</p>

      <p className={styles.contact}>
        📧 rohitbendre27@email.com | 📱 +91 9867685314
      </p>
    </div>
  );
}
