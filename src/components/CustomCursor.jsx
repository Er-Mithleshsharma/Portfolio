import React, { useEffect, useRef } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const onMouseMove = (event) => {
      const { clientX, clientY } = event;
      cursor.style.left = `${clientX}px`;
      cursor.style.top = `${clientY}px`;
    };

    const onMouseHover = () => {
      cursor.classList.add("hovered");
    };

    const onMouseLeave = () => {
      cursor.classList.remove("hovered");
    };

    const isSmallDevice = window.innerWidth <= 768;

    if (!isSmallDevice) {
      document.addEventListener("mousemove", onMouseMove);

      const elementsToHover = document.querySelectorAll("a, img, p, h1, h2, h3, h4, h5, h6, span, li, ul");
      elementsToHover.forEach((element) => {
        element.addEventListener("mouseenter", onMouseHover);
        element.addEventListener("mouseleave", onMouseLeave);
      });

      return () => {
        document.removeEventListener("mousemove", onMouseMove);
        elementsToHover.forEach((element) => {
          element.removeEventListener("mouseenter", onMouseHover);
          element.removeEventListener("mouseleave", onMouseLeave);
        });
      };
    }
  }, []);

  return <div ref={cursorRef} className="custom-cursor"></div>;
};

export default CustomCursor;
