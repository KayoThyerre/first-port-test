import React, { useEffect, useRef } from 'react';
import '../App.css'

const Typing = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    const activateLetter = (element) => {
      const arrayText = element.innerHTML.split('');
      element.innerHTML = '';
      arrayText.forEach((letter, i) => {
        setTimeout(() => {
          element.innerHTML += letter;
        }, 75 * i);
      });
    };

    if (typingRef.current) {
      activateLetter(typingRef.current);
    }
  }, []);

  return <h2 ref={typingRef} className="typing">Web Developer and UX/UI Desing</h2>;
};

export default Typing;