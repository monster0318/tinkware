"use client";
import { useEffect } from "react";

const followImageCursor = (event, serviceImgItem, rotation) => {
  const contentBox = serviceImgItem.getBoundingClientRect();
  const dx = event.clientX - contentBox.x;
  const dy = event.clientY - contentBox.y;
  serviceImgItem.children[2].style.transform = `translate(${dx}px, ${dy}px) rotate(${rotation}deg)`;
};

const useFollowCursor = (selector, rotation) => {
  useEffect(() => {
    const serviceImgItems = document.querySelectorAll(selector);

    const handleMouseMove = (event) => {
      serviceImgItems.forEach((item) => {
        followImageCursor(event, item, rotation);
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [selector, rotation]);
};

export default useFollowCursor;
