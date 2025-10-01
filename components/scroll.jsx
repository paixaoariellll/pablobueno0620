"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function Scroll() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className='fixed bottom-6 right-6 z-50 p-3 rounded-full bg-muted text-foreground shadow-lg hover:bg-muted/20 transition'
        >
          <ArrowUp className='h-5 w-5' />
        </button>
      )}
    </>
  );
}
