import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>

      <p>Loosely designed in Figma and coded in Visual Studio Code by yours truly. Built with Next.js and Tailwind CSS, deployed with Vercel. All text is set in the Inter typeface.</p>

      <p className={styles.contact}>
        📧 rohitbendre27@email.com | 📱 +91 9867685314
      </p>
    </div>
  );
}
