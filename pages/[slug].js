import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";
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
      <div style={{ background: "black", opacity: 0.5 }}>
        <Home />
      </div>
      <div className={styles.wrapper}>
        <Link href="/" key={slug}>
          <motion.div
            layoutId={slug}
            className={styles.card}
            initial={{ scale: 1 }}
            whileDrag={{ scale: 0.8 }}
            onDragEnd={handleDragEnd}
            dragElastic={0.6}
            style={{ originY: 0.5 }}
            dragConstraints={{ top: 0, bottom: 0 }}
            drag="y"
            transition={{ type: "tween", stiffness: 100, duration: 0.6 }}
          >
            <motion.img
              layoutId={`${slug}img`}
              className={styles.img}
              src={`${slug}.jpg`}
              transition={{ type: "tween", stiffness: 10, duration: 0.6 }}
            />
            <motion.div
              className={styles.p}
              transition={{ type: "spring", stiffness: 100, duration: 0.6 }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text.
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text.
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text.
            </motion.div>
          </motion.div>
        </Link>
      </div>
    </>
  );
};

export default Slug;
