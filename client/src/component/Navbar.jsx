import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

const Navbar = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    return (
        <nav className="navbar">
            <h1>Cup</h1>
            <div className="dark-mode_toggle">
            <button
                onClick={toggleMode}
                className={darkMode ? 'toggle toggle' : 'toggle'}
                >
            </button>
            </div>
        </nav>
    )
};

export default Navbar;