import { useEffect } from "react";

export default function useClickOutside(ref, callback) {
  useEffect(() => {
    function handlePointerDown(e) {
      if (!ref.current) return;

      if (!ref.current.contains(e.target)) {
        callback();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [ref, callback]);
}
