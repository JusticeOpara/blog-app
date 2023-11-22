"use client";

import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/Context/ThemeContext";

const ThemeProvider = ({ childern }) => {
  const { theme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return <div className={theme}>{childern}</div>;
  }
};

export default ThemeProvider;
