"use client";

import { useEffect } from "react";

const ForceDark = () => {
  useEffect(() => {
    document.documentElement.classList.add("dark");

    document.documentElement.classList.remove("light");
  }, []);

  return null;
};

export default ForceDark;
