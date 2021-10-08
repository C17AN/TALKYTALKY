import React from "react";
import { pageVariants } from "styles/framerAnimation";
import {motion} from "framer-motion"
import styles from "./BaseCard.module.css";

const BaseCard = ({ className: cn, children }) => {
  return (
    <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
      className={[
        cn,
        styles.card,
        "mb-4 border border-gray-300 shadow-md rounded-md",
      ].join(" ")}
    >
      {children}
    </motion.div>
  );
};

export default BaseCard;
