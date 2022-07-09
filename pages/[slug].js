import { useRouter } from "next/router";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/Home.module.css";
import Home from "./index";
import { useState } from "react";
import { useEffect } from "react";

const Slug = () => {
  const router = useRouter();
  const [scrollVal, setScroll] = useState(0);
  const { slug } = router.query;
  const { scroll } = router.query;
  const { scrollPosition } = router.query;
  const handleDragEnd = () => {
    router.push("/");
  };
  useEffect(() => {
    setScroll(localStorage.getItem("scroll"));
  });
  return (
    <>
      <div style={{ background: "black", opacity: 1 }}>
        <Home />
      </div>
      <motion.div
        layoutId={slug}
        id={slug}
        className={`${styles.card} ${styles.pos}`}
        layout={true}
        initial={{ scale: 1, top: scrollPosition }}
        animate={{ scale: 1, zoom: 1, top: scrollPosition }}
        whileDrag={{ scale: 0.9 }}
        exit={{ top: scrollPosition }}
        onPanEnd={handleDragEnd}
        dragElastic={0.6}
        dragSnapToOrigin={true}
        style={{ height: "100vh", minHeight: "200vh", top: scrollPosition }}
        dragConstraints={{ top: 80, bottom: 80 }}
        drag="y"
        transition={{
          type: "tween",
          stiffness: 300,
          damping: 35,
          duration: 0.3,
        }}
      >
        <motion.img
          layoutId={`${slug}img`}
          className={styles.img}
          style={{ height: 350, scale: 1 }}
          initial={{
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            scale: 1,
          }}
          animate={{
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            scale: 1.6,
            zoom: 1,
          }}
          src={`${slug}.jpg`}
          transition={{
            type: "tween",
            stiffness: 300,
            damping: 35,
            duration: 0.3,
          }}
        />
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
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text.
        </motion.p>
      </motion.div>
    </>
  );
};

export default Slug;
