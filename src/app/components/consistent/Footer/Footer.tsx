import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} MediSphere. All rights reserved.</p>
      <div className={styles.links}>
        <a href="/privacy-policy" className={styles.link}>
          Privacy Policy
        </a>
        <a href="/terms-of-service" className={styles.link}>
          Terms of Service
        </a>
      </div>
    </footer>
  );
};

export default Footer;
