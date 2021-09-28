import Recorder from "components/Recorder/Recorder";
import SelectDifficulty from "components/SelectDifficulty/SelectDifficulty";
import React from "react";
import styles from "./RightLayout.module.css";

const RightLayout = () => {
  return (
    <div className={styles["layout-right"]}>
      <SelectDifficulty />
      <Recorder />
    </div>
  );
};

export default RightLayout;
