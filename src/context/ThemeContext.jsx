import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");

    //detectar preferencia del navegador

    useEffect(() => {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setTheme(prefersDark ? "dark" : "light");
    }, []);

    //actualizar clase en el body cuando cambia el tema
    useEffect(() => {
        document.body.classList.toggle("dark-theme", theme === "dark");
        document.body.classList.toggle("light-theme", theme === "light");
    }, [theme]);

    //alternar tema manualmente
    const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            { children }
        </ThemeContext.Provider>
    );
}