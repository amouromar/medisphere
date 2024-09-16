import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className="p-4">
      <nav className="flex justify-between px-3">
        <Link href="/" className={styles.logo}>
          MediSphere
        </Link>
        <div className={styles.menu}>
          <Link href="/auth/login" className={styles.button}>
            Log In
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
