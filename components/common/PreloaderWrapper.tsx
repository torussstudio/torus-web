"use client";

import { useEffect, useState } from "react";
import Preloader from "./Preloader";

export default function PreloaderWrapper() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const hasShown = sessionStorage.getItem("preloader-shown");

    if (!hasShown) {
      setLoading(true);
      sessionStorage.setItem("preloader-shown", "true");
    }

    const handleBeforeUnload = () => {
      sessionStorage.removeItem("preloader-shown");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  if (!loading) return null;

  return (
    <Preloader
      onComplete={() => setLoading(false)}
    />
  );
}