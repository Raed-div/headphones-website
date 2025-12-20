import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Navbar = () => {
  const { dark, toggleDarkMode } = useContext(ThemeContext);

  return (
    <nav>
      <button onClick={toggleDarkMode}>
        {dark ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
