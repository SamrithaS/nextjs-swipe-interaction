import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  let array = ["bug", "cat", "snow", "moon"];
  return (
    <div className={styles.div}>
      {array.map((item) => (
        <Link href={`/${item}`} key={item}>
          <motion.div
            layoutId={item}
            className={styles.card}
            animate={{ scale: 1 }}
            transition={{ type: "tween", stiffness: 100, duration: 0.6 }}
          >
            <motion.img layoutId={`${item}1`} className={styles.img} src={`${item}.jpg`} transition={{ type: "tween", stiffness: 10, duration: 0.6 }}/>

            <motion.div className={styles.p} transition={{ type: "spring", stiffness: 100, duration: 0.6 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text.
            </motion.div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}
