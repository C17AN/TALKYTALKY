import React from "react";
import styles from "./BaseCard.module.css";

const BaseCard = ({ className: cn, children }) => {
  return (
    <div
      className={[
        cn,
        styles.card,
        "mb-4 border border-gray-300 shadow-md rounded-md",
      ].join(" ")}
    >
      {children}
    </div>
  );
};

export default BaseCard;
