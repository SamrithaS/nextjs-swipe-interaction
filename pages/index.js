import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { resolveHref } from "next/dist/shared/lib/router/router";
import * as ReactDOM from "react-dom";

export default function Home() {
  const router = useRouter();
  let array = ["joker", "avatar", "1917", "itallends", "dumbledore", "arthur"];
  const [scrollPosition, setScrollPosition] = useState(0);
  const [offset, setOffset] = useState({});
  const elref = useRef([]);
  console.log(router.pathname);
  const handleScroll = () => {
    const position = window.pageYOffset;
    localStorage.setItem("scroll", position);
    setScrollPosition(position);
  };

  useEffect(() => {
    document.body.addEventListener("scroll", handleScroll, { passive: true });
    if (router.pathname === "/") {
      document.body.scrollTo(0, localStorage.getItem("scroll"));
    }
    return () => {
      document.body.removeEventListener("scroll", handleScroll);
    };
  }, []);
  var rect = {};
  useEffect(() => {
    array.map((item, id) => {
      rect[id] = document.getElementById(id).getBoundingClientRect().top;
      setOffset(rect);
    });
  }, []);
  return (
    <motion.body className={styles.div} layoutScroll>
      {array.map((item, id) => (
        <Link
          href={{
            pathname: `${item}`,
            query: { scroll: offset[id], scrollPosition },
          }}
          key={item}
          scroll={false}
        >
          <div id={id}>
            <motion.div
              ref={(element) => {
                elref.current[id] = element;
              }}
              key={router?.query?.slug}
              layoutId={item}
              layout
              style={{ margin: 10, scale: 1 }}
              className={styles.card}
              // initial={{ top: scrollPosition }}
              // animate={{ top: scrollPosition }}
              transition={{
                type: "tween",
                stiffness: 300,
                damping: 30,
                duration: 0.3,
              }}
            >
              <motion.img
                layoutId={`${item}img`}
                className={styles.img}
                src={`${item}.jpg`}
                whileHover={{ scale: 1.1 }}
                initial={{ scale: 1 }}
                // animate={{ maxWidth: 300, height: 250, width: 800}}
                transition={{
                  type: "tween",
                  stiffness: 300,
                  damping: 30,
                  duration: 0.3,
                }}
              />
            </motion.div>
          </div>
        </Link>
      ))}
    </motion.body>
  );
}
