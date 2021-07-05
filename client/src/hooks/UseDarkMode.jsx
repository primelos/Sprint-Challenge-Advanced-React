import { useEffect } from "react";
import { useLocalStorage } from "./UseLocalStorage";

export const useDarkMode = () => {
  const [darkModes, setDarkModes] = useLocalStorage('darkening');

  useEffect(() => {
    const className = "dark-mode";
    const pick = window.document.body;
    if (darkModes) {
      pick.classList.add(className);
    } else {
      pick.classList.remove(className);
    }
  }, [darkModes]);
  return [darkModes, setDarkModes];
};
