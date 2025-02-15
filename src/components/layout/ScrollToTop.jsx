import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Dapatkan path halaman saat ini

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll ke atas setiap kali path berubah
  }, [pathname]);

  return null; // Tidak perlu merender apa pun
};

export default ScrollToTop;
