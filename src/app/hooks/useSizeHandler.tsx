import { useEffect } from 'react';

const useResizeHandler = (onResize: () => void) => {
  useEffect(() => {
   
    const handleResize = () => {
      onResize();
    };


    window.addEventListener('resize', handleResize);

   
    handleResize();


    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [onResize]);
};

export default useResizeHandler;
