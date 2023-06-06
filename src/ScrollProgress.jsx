import React, { useEffect, useState } from "react";
import '../src/scroll.css'

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const currentProgress = (scrollTop / documentHeight) * 100;
      setProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scroll-progress">
      <div className="scroll-progress-bar" style={{ width: `${progress}%` }} />
      <div className="scroll-progress-headers">
        <h2>Home</h2>
        <h2>Services</h2>
        <h2>About</h2>
      </div>
    </div>
  );
};

export default ScrollProgress;
