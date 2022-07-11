import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/Home.module.css";
import Home from "./index";
import { useRef } from "react";

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  const scrollItem = useRef(null);
  const { scrollPosition } = router.query;
  const {scroll} = router.query;
  const actualItem = useRef(null);
  const handleOnDragEnd = (_, info) => {
    const data = scrollItem.current.getBoundingClientRect();
    console.log(info, data);
    if (info.offset.y > 40 && data.top > 0) {
      router.back();
    }
  };
  return (
    <>
      <div style={{ background: "black", opacity: 1 }}>
        {/* <Home /> */}
      </div>
      <AnimatePresence>

      <motion.div
        layoutId={slug}
        id={slug}
        ref={actualItem}
        className={`${styles.card} ${styles.pos}`}
        layout
        initial={{ scale: 1, top: scrollPosition }}
        animate={{ scale: 1, zoom: 1, top: scrollPosition }}
        // whileDrag={{ scale: 0.9 }}
        exit={{ top: scroll }}
        // style={{ height: "100vh", minHeight: "200vh", top: scrollPosition }}
        transition={{
          type: "tween",
          stiffness: 300,
          damping: 35,
          duration: 0.3,
        }}
      >
        <motion.div
          dragConstraints={actualItem}
          ref={scrollItem}
          dragElastic={0.6}
          // dragSnapToOrigin
          onDragEnd={handleOnDragEnd}
          drag="y"
          style={{display: 'flex', flexDirection:'column', maxWidth:'100%'}}
        >
          <motion.img
            layoutId={`${slug}img`}
            className={styles.img}
            style={{ height: 500, scale: 1, width:'auto' }}
            initial={{
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              scale: 1,
            }}
            animate={{
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              scale: 1,
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
      </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Slug;
