import styles from "./WhoWeAreSection.module.css";

export default function WhoWeAreSection() {
  return (
    <section className={styles.whoWeAre}>
      <h2>Who We Are</h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h3>What Our System Is</h3>
          <p>Details about the system.</p>
        </div>
        <div className={styles.card}>
          <h3>How It Started</h3>
          <p>Information on how it began.</p>
        </div>
        <div className={styles.card}>
          <h3>What It Aims to Solve</h3>
          <p>Goals and solutions provided.</p>
        </div>
      </div>
    </section>
  );
}
