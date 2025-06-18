import { useEffect, useState } from "react";

export const useScrollDirection = () => {
  const [showElement, setShowElement] = useState(true);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastY) {
        setShowElement(false);
      } else {
        setShowElement(true);
      }
      setLastY(currentY);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);
  return showElement;
};
