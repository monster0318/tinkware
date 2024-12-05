"use client";

// useTooltip.js
import { useEffect } from "react";
import gsap from "gsap";

export default function useTooltip() {
  useEffect(() => {
    gsap.config({
      nullTargetWarn: false,
      trialWarn: false,
    });

    function createTooltip(element) {
      const tooltip = document.createElement("div");
      tooltip.className = "div-tooltip-tit";
      tooltip.textContent = element.getAttribute("data-tooltip-tit");
      document
        .querySelector(".portfolio-info-flow-section")
        .appendChild(tooltip);
      gsap.to(tooltip, { autoAlpha: 1 });
    }

    function removeTooltip() {
      const tooltip = document.querySelector(".div-tooltip-tit");
      if (tooltip) {
        tooltip.style.display = "none"; // Hide the tooltip
        tooltip.parentNode.removeChild(tooltip);
      }
    }

    function updateTooltipPosition(e) {
      const tooltip = document.querySelector(".div-tooltip-tit");
      if (tooltip) {
        tooltip.style.display = "block"; // Show the tooltip
        tooltip.style.top = e.pageY + 13 + "px"; // Adjust top position
        tooltip.style.left = e.pageX + 10 + "px"; // Adjust left position
      }
    }

    function handleTooltipEvents(e) {
      if (e.type === "mouseenter") {
        createTooltip(e.currentTarget);
      } else if (e.type === "mouseleave") {
        removeTooltip();
      } else if (e.type === "mousemove") {
        updateTooltipPosition(e);
      }
    }

    const elements = document.querySelectorAll("[data-tooltip-tit]");
    elements.forEach((element) => {
      element.addEventListener("mouseenter", handleTooltipEvents);
      element.addEventListener("mouseleave", handleTooltipEvents);
      element.addEventListener("mousemove", handleTooltipEvents);
    });

    return () => {
      elements.forEach((element) => {
        element.removeEventListener("mouseenter", handleTooltipEvents);
        element.removeEventListener("mouseleave", handleTooltipEvents);
        element.removeEventListener("mousemove", handleTooltipEvents);
      });
      removeTooltip();
    };
  }, []);
}
