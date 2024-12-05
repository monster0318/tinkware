import { useEffect } from 'react';

const useWow = () => {
  useEffect(() => {
    const initWow = () => {
      import('wowjs').then((module) => {
        const WOW = module.default;
        const wow = new WOW.WOW({
          boxClass: 'wow',
          animateClass: 'animated',
          offset: 80,
          mobile: true,
          live: true,
        });
        wow.init();
      });
    };

    if (typeof window !== 'undefined') {
      initWow();

      const handleRouteChange = () => {
        if (typeof window.WOW !== 'undefined') {
          window.WOW.sync();
        }
      };

      // Listen for route changes
      document.addEventListener('routeChangeComplete', handleRouteChange);

      return () => {
        document.removeEventListener('routeChangeComplete', handleRouteChange);
      };
    }
  }, []);
};

export default useWow;
