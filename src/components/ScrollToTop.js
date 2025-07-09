// src/components/ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation(); // Gets the current URL path (e.g., '/', '/services')

  useEffect(() => {
    // This effect runs whenever the 'pathname' changes (i.e., you navigate to a new route)

    // Check if there's no hash in the URL.
    // This prevents scrolling to top if you click an internal anchor link like #testimonials
    // on the *same* page. It only scrolls to top on full page transitions.
    if (!window.location.hash) {
      window.scrollTo(0, 0); // Scroll to the very top of the window
    }
  }, [pathname]); // Dependency array: Effect runs when 'pathname' changes

  return null; // This component doesn't render any visible UI
}

export default ScrollToTop;