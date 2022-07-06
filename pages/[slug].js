import { useRouter } from "next/router";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/Home.module.css";
import Home from "./index";

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  const handleDragEnd = () => {
    router.push("/");
  };

  return (
    <>
      <div style={{ background: "black", opacity: 1 }}>
        <Home />
      </div>
      {/* <div className={styles.wrapper}> */}
      {/* <AnimatePresence initial={false}> */}
      {/* <Link href="/" key={slug}> */}
        <motion.div
          layoutId={slug}
          className={`${styles.card} ${styles.pos}`}
          //   initial={{
          //     maxWidth: "100%",
          //     width: "100%",
          //     height: "10%",
          //     minHeight: "100vh",
          //   }}
          //   animate={{
          //     width: "100%",
          //     maxWidth: "100%",
          //     height: "100%",
          //     minHeight: "100vh",
          //   }}

          initial={{ scale:1 }}
          animate={{ scale:1, zoom:1}}
          whileDrag={{ scale: 0.9 }}
          onPanEnd={handleDragEnd}
          dragElastic={0.6}
          dragSnapToOrigin={true}
          style={{ height: "100%", minHeight: "100vh" }}
          dragConstraints={{ top: 80, bottom: 80 }}
          drag="y"
          transition={{ type: "tween", stiffness: 100, duration: 0.3 }}
        >
          <motion.img
            layoutId={`${slug}img`}
            className={styles.img}
            style = {{height:250, scale: 1}}
            initial={{ borderBottomLeftRadius:10, borderBottomRightRadius:10, scale:1 }}
            animate={{ borderBottomLeftRadius:0, borderBottomRightRadius:0, scale:1.3, zoom:1}}
            src={`${slug}.jpg`}
            transition={{ type: "tween", stiffness: 100, duration: 0.3 }}
          />
          <motion.p
            className={styles.p}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "tween", stiffness: 100, duration: 1 }}
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
      {/* </Link> */}
      {/* </div> */}
      {/* </AnimatePresence> */}
    </>
  );
};

export default Slug;
