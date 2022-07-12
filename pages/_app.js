import "../styles/globals.css";
import { createContext } from "react";
import styles from "../styles/Home.module.css";

const ScrollContext = createContext();

function MyApp({ Component, pageProps }) {
  return (
    <main className={styles.main}>
      <Component {...pageProps} />
    </main>
  );
}
export { ScrollContext };
export default MyApp;
