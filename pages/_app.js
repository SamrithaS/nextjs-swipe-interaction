import "../styles/globals.css";
import { AnimateSharedLayout } from "framer-motion";
import styles from "../styles/Home.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <main className={styles.main}>
      {/* <AnimateSharedLayout> */}
        <Component {...pageProps} />
      {/* </AnimateSharedLayout> */}
    </main>
  );
}

export default MyApp;
