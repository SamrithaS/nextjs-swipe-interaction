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
      {/* <Home /> */}
      <div style={{ position: 'absolute' }}>
        <Link href="/" key={slug}>
          <motion.div
            layoutId={slug}
            className={styles.card}
            animate={{ scale: 1.2 }}
            whileDrag={{ scale: 1.1 }}
            onDragEnd={handleDragEnd}
            dragElastic={0.6}
            dragConstraints={{ top: -133, bottom: 100 }}
            drag="y"
            transition={{ type: "tween", stiffness: 10, duration: 0.6 }}
          >
            <img className={styles.img} src={`${slug}.jpg`} />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
          </motion.div>
        </Link>
      </div>
    </>
  );
};

export default Slug;
