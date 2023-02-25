import { useEffect, useState } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1080);

  useEffect(() => {
    const updateSize = () => {
      setIsMobile(window.innerWidth < 1080);
    };

    window.addEventListener('resize', updateSize);

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return isMobile;
};
export default useIsMobile;
