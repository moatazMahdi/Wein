import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const element = document.documentElement;

    if (element.scrollTop > 0 || window.location.pathname !== pathname) {
      element.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

export default ScrollToTop;
