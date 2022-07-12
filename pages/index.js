import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRef } from "react";

export default function Home() {
  const router = useRouter();
  let array = ["joker", "avatar", "1917", "itallends", "dumbledore", "arthur"];
  const [scrollPosition, setScrollPosition] = useState(0);
  const [offset, setOffset] = useState({});
  const elref = useRef([]);
  const handleScroll = () => {
    const position = document.getElementById("body").scrollTop;
    setScrollPosition(position);
    localStorage.setItem("scroll", position);
  };

  useEffect(() => {
    document.getElementById("body").addEventListener("scroll", handleScroll);
    if (router.pathname === "/") {
      document.getElementById("body").scroll(0, localStorage.getItem("scroll"));
    }
    return () => {
      document
        ?.getElementById("body")
        ?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  var rect = {};
  useEffect(() => {
    array.map((item, id) => {
      rect[id] = elref.current[id].offsetTop;
      setOffset(rect);
    });
  }, []);

  return (
    <motion.div className={styles.div} layoutScroll id="body">
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
              initial={{ top: -20 }}
              animate={{ top: scrollPosition }}
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
    </motion.div>
  );
}
