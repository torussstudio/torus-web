"use client";

import { useState } from "react";
import Preloader from "./Preloader";

export default function PreloaderWrapper() {
  const [loading, setLoading] = useState(true);

  if (!loading) return null;

  return (
    <Preloader
      onComplete={() => setLoading(false)}
    />
  );
}