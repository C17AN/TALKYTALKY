import CenterLayout from "layout/CenterLayout/CenterLayout";
import React from "react";
import LeftLayout from "../LeftLayout/LeftLayout";
import RightLayout from "../RightLayout/RightLayout";
import styles from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <div className={styles["layout-main"]}>
      <LeftLayout />
      <CenterLayout />
      <RightLayout />
    </div>
  );
};

export default MainLayout;
