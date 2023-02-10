import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const useScrollTop = () => {
  const scrollHandler = () => {
    window.scrollTo(0, 0);
  };

  return { scrollHandler };
};

export default useScrollTop;
