import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  let array = ["joker", "avatar", "1917", "itallends", "dumbledore", "arthur"];
  const [scrollPosition, setScrollPosition] = useState(0);

  // useEffect(() => {
  //   if (router.pathname !== "/") {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "scroll";
  //   }
  // }, [router]);
  console.log(router.pathname);
  const handleScroll = () => {
    const position = window.pageYOffset;
    localStorage.setItem("scroll", position);
    setScrollPosition(position);
  };

  useEffect(() => {
    if (router.pathname === "/") {
      window.addEventListener("scroll", handleScroll, { passive: true });
      console.log("here", localStorage.getItem("scroll"));

      window.scrollTo(0, localStorage.getItem("scroll"));
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router.pathname]);

  return (
    <div className={styles.div}>
      {array.map((item) => (
        <Link href={`/${item}`} key={item}>
          <motion.div
            layoutId={item}
          layout="position"
            style={{ margin: 10, scale: 1 }}
            className={styles.card}
            // initial={{  maxWidth: 300, height:'auto'}}
            transition={{ type: "tween", stiffness: 300, damping:30, duration: 0.3 }}
            >
            <motion.img
              layoutId={`${item}img`}
              className={styles.img}
              src={`${item}.jpg`}
              whileHover={{ scale: 1.1 }}
              initial={{ scale: 1 }}
              // animate={{ maxWidth: 300, height: 250, width: 800}}
              transition={{ type: "tween", stiffness: 300, damping:30, duration: 0.3 }}
              />
          </motion.div>
        </Link>
      ))}
    </div>
  );
}
