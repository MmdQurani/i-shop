import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToFirst() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // این ویژگی باعث می‌شود اسکرول به آرامی انجام شود  
    });
  }, [pathname]);

  return null;
}

export default ScrollToFirst;
