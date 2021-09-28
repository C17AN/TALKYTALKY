import React from "react";
import BaseCard from "components/common/BaseCard/BaseCard";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <BaseCard>
      <ul>
        <MenuItem title="한국어 (TOPIK)" />
        <MenuItem title="영어 (OPIC)" />
      </ul>
    </BaseCard>
  );
};

export default Menu;
