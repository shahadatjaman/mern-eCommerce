import Drawer from "../../Shared/Drawer/index";

import React from "react";
import Categories from "./Categories";
import { useEffect } from "react";
import { useState } from "react";

const Category = ({ isOpenNav, closeHandler }) => {
  const [cate, setCate] = useState(null);

  useEffect(() => {
    const cate__ = localStorage.getItem("cate__");
    if (cate__) {
      setCate(JSON.parse(cate__));
    }
  }, []);
  return (
    <>
      <Drawer isOpenNav={isOpenNav} closeHandler={closeHandler}>
        {cate && <Categories categories={cate} closeHandler={closeHandler} />}
      </Drawer>
    </>
  );
};

export default Category;
