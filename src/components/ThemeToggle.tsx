"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Fix pour éviter le mismatch entre SSR/Client
  }, []);

  if (!mounted) return null;

  return (
    <button
      className="flex items-center gap-2 p-2 rounded transition-colors"
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
      <Sun className="h-5 w-5 text-yellow-500" />
      ) : (
      <Moon className="h-5 w-5 text-blue-400" />
      )}
    </button>
  );
}
