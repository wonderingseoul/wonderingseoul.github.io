"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// 콘텐츠는 처음부터 보입니다. JavaScript나 애니메이션이 꺼져도 읽을 수 있습니다.
export function PageMotion() {
  const pathname = usePathname();
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) if (entry.isIntersecting) {
        entry.target.animate([{ transform: "translateY(12px)", opacity: .55 }, { transform: "translateY(0)", opacity: 1 }], { duration: 380, easing: "ease-out" });
        observer.unobserve(entry.target);
      }
    }, { threshold: .08 });
    document.querySelectorAll(".publication, .project, .education-entry").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);
  return null;
}
