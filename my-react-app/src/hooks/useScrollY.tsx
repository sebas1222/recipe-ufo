import { useState, useEffect } from "react";

// Custom hook para detectar el desplazamiento en el eje Y
const useScrollY = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const posY = window.scrollY;
      setScrollY(posY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollY;
};

export default useScrollY;
