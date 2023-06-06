import React, { useEffect, useState } from "react";
import './MouseScroll.css';

const MouseScroll = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      
      setShow(false);
    }, 5000);

    setTimeout(() => {
      document.getElementById('mouse').className = 'mouse fade-out';
    }, 3000)

    return () => {
      clearTimeout(timeId);
      
    };
  }, []);
  
  if (!show) {
    return null;
  }
  
  return (
    <div className="mouse fade-in" id="mouse">
      <div className="mouse-icon">
        <span className="mouse-wheel"></span>
      </div>
    </div>
  );
};

export default MouseScroll;
