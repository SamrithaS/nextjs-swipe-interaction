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
  console.log(router, "router");
  return (
    <>
    <motion.div style={{background: 'black', opacity: 0.5}} transition={{ type: "tween", stiffness: 10, duration: 0.6 }}>
      <Home />
      </motion.div>
      <div style={{ position: "absolute" }}>
        <Link href="/" key={slug}>
          <motion.div
            layoutId={slug}
            className={styles.card}
            initial={{ scale: 1 }}
            whileDrag={{ scale: 0.8}}
            onDragEnd={handleDragEnd}
            dragElastic={0.6}
            dragConstraints={{ top: -133, bottom: 100 }}
            drag="y"
            transition={{ type: "tween", stiffness: 10, duration: 0.6 }}
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
