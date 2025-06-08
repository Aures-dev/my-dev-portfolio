import { useEffect, useState, useRef } from "react";

/**
 * Hook to create a typing effect for an array of strings.
 * It types each string character by character, then deletes it,
 * cycling through the array with pauses in between.
 *
 * @param texts - Array of strings to type and delete.
 * @param options - Optional settings for typing speed, deleting speed, and pauses.
 * @returns The currently displayed text.
 */

export function useTypingEffect(
  texts: string[],
  options?: {
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseBetween?: number;
    pauseEnd?: number;
  }
) {
  const {
    typingSpeed = 80,
    deletingSpeed = 40,
    pauseBetween = 1200,
    pauseEnd = 800,
  } = options || {};

  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (!mounted.current || texts.length === 0) return;

    const current = texts[index % texts.length];
    let timeout: NodeJS.Timeout;

    if (isPaused) {
      // Gérer les pauses (après typage ou suppression)
      timeout = setTimeout(() => {
        if (mounted.current) {
          setIsPaused(false);
          if (deleting && subIndex === 0) {
            // Fin de la suppression : passer au mot suivant
            setIndex((i) => (i + 1) % texts.length);
            setSubIndex(0);
            setDisplayed("");
            setDeleting(false);
          } else if (!deleting && subIndex === current.length) {
            // Fin du typage : commencer la suppression
            setDeleting(true);
          }
        }
      }, deleting ? pauseEnd : pauseBetween);
    } else if (!deleting && subIndex < current.length) {
      // Phase de typage
      timeout = setTimeout(() => {
        if (mounted.current) {
          setDisplayed(current.substring(0, subIndex + 1));
          setSubIndex((s) => s + 1);
        }
      }, typingSpeed + Math.random() * 60);
    } else if (!deleting && subIndex === current.length) {
      // Fin du typage : déclencher une pause
      setIsPaused(true);
    } else if (deleting && subIndex > 0) {
      // Phase de suppression
      timeout = setTimeout(() => {
        if (mounted.current) {
          setDisplayed(current.substring(0, subIndex - 1));
          setSubIndex((s) => s - 1);
        }
      }, deletingSpeed + Math.random() * 30);
    } else if (deleting && subIndex === 0) {
      // Fin de la suppression : déclencher une pause
      setIsPaused(true);
    }

    return () => clearTimeout(timeout);
  }, [texts, index, subIndex, deleting, isPaused, typingSpeed, deletingSpeed, pauseBetween, pauseEnd]);

  return displayed;
}