import React from "react";
import styles from "./BaseCard.module.css";

const BaseCard = ({ className: cn, children }) => {
  return <div className={[cn, styles.card].join(" ")}>{children}</div>;
};

export default BaseCard;
