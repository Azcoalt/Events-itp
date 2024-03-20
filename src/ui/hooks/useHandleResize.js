import { useEffect, useState } from "react";

export default function useHandleResize({ breakpoint }) {
    const [showImg, setShowImg] = useState(false);
    useEffect(() => {
      const handleResize = () => {
        setShowImg(window.innerWidth < breakpoint);
      };
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }, [breakpoint]);
    return showImg;
  }