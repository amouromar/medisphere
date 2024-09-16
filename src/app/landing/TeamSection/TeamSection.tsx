import Link from "next/link";
import styles from "./TeamSection.module.css";

export default function TeamSection() {
  return (
    <section className={styles.team}>
      <h2>Meet the Team</h2>
      <div className={styles.teamMembers}>
        <div className={styles.member}>
          <img
            src="/path/to/founder1.jpg"
            alt="Founder 1"
            className={styles.memberImage}
          />
          <h3>Founder 1</h3>
        </div>
        <div className={styles.member}>
          <img
            src="/path/to/founder2.jpg"
            alt="Founder 2"
            className={styles.memberImage}
          />
          <h3>Founder 2</h3>
        </div>
        <div className={styles.member}>
          <img
            src="/path/to/founder3.jpg"
            alt="Founder 3"
            className={styles.memberImage}
          />
          <h3>Founder 3</h3>
        </div>
      </div>
      <div className={styles.cta}>
        <Link href="/auth/login" className={styles.button}>
          Log In
        </Link>
        <Link href="/auth/signup" className={styles.button}>
          Sign Up
        </Link>
      </div>
    </section>
  );
}
