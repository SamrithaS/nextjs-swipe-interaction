import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { resolveHref } from "next/dist/shared/lib/router/router";
import * as ReactDOM from "react-dom";

export default function Images() {
  const router = useRouter();
  const [scrollVal, setScroll] = useState(0);
  const { slug } = router.query;
  const { scroll } = router.query;
  //   const { scrollPosition } = router.query;
  const [scrollPosition, setScrollPosition] = useState(0);
  const [offset, setOffset] = useState({});
  let array = ["joker", "avatar", "1917", "itallends", "dumbledore", "arthur"];
  //   console.log(slug, "slug");
  //   router.beforePopState((state) => {
  //     state.options.scroll = false;
  //     return true;
  //   });

  useEffect(() => {
    if (slug?.[0]) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [slug]);
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position !== 0) {
      localStorage.setItem("scroll", position);
      setScrollPosition(position);
    }
  };

  useEffect(() => {
    // if (router.pathname === "/images") {
    window.addEventListener("scroll", handleScroll, { passive: true });
    console.log("here", localStorage.getItem("scroll"));
    // if (router.pathname === "/images") {
      window.scrollTo(0, localStorage.getItem("scroll"));
    // }
    // }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div className={styles.div} id="wrapper">
      {array.map((item, id) => (
        <Link href={`${item}`} key={item}>
          <div id={id}>
            <motion.div
              key={router?.query?.slug}
              layoutId={item}
              layout={true}
              className={styles.card}
              initial={{ scale:1 }}
              onDragEnd={() => {
                router.push("/images");
              }}
              drag={slug?.[0] === item ? "y" : false}
              animate={
                slug?.[0] === item
                  ? {
                    //   width: "100%",
                        position: "absolute",
                      scale:1,
                      zoom:1,
                    //   y: 0,
                    //   x: 0,
                    //   height: "100%",
                        top: 0,
                      //   bottom: 0,
                      left: 0,
                      right: 0,
                      zIndex: 100,
                      overflow: scroll,
                    }
                  : ""
              }
            //   exit={
            //     slug?.[0] === item
            //       ? {
            //         scale:1,
            //         zoom:1,
            //         //   position: "absolute",
            //           //   y: 0,
            //           //   x: 0,
            //           scale:1,
            //           zoom:1,
            //         //   height: "100%",
            //           //   top: 0,
            //           //   bottom: 0,
            //           left: 0,
            //           right: 0,
            //           zIndex: 100,
            //           overflow: scroll,
            //         }
            //       : ""
            //   }
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
                src={`/${item}.jpg`}
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
              {slug?.[0] === item ? (
                <motion.p
                  className={styles.p}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    type: "tween",
                    stiffness: 300,
                    damping: 35,
                    duration: 1,
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industrys standard dummy text. Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry. Lorem Ipsum has
                  been the industrys standard dummy text. Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industrys standard dummy text. Lorem Ipsum
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industrys standard dummy text. Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industrys standard dummy
                  text. Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industrys standard dummy text. Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry. Lorem Ipsum has
                  been the industrys standard dummy text. Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industrys standard dummy text. Lorem Ipsum
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industrys standard dummy text. Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industrys standard dummy
                  text. Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industrys standard dummy text. Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry. Lorem Ipsum has
                  been the industrys standard dummy text. Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industrys standard dummy text. Lorem Ipsum
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industrys standard dummy text. Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industrys standard dummy
                  text. Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industrys standard dummy text. Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry. Lorem Ipsum has
                  been the industrys standard dummy text. Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industrys standard dummy text. Lorem Ipsum
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industrys standard dummy text. Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industrys standard dummy
                  text.
                </motion.p>
              ) : (
                <></>
              )}
            </motion.div>
          </div>
        </Link>
      ))}
    </div>
  );
}
