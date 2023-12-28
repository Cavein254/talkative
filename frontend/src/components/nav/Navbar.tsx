import React, { useEffect } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
const Navbar = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  let url =
    "data:image/jpeg;base64,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";

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.documentElement.setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <div className="navbar bg-base-100 shadow-lg px-4 sm:px-8">
      <div className="flex-1">
        <img src={url} alt="OM" className="btn btn-ghost p-0" />
        <h1 className="text-lg font-bold mx-4">Your Website</h1>
      </div>
      <div className="flex-none">
        {/* Toggle button here */}
        <button className="btn btn-square btn-ghost">
          <label className="swap swap-rotate w-12 h-12">
            <input
              type="checkbox"
              onChange={handleToggle}
              // show toggle image based on localstorage theme
              checked={theme === "light" ? false : true}
            />
            {/* light theme sun image */}
            <FaSun className="w-8 h-8 swap-on text-orange-300" />
            {/* dark theme moon image */}
            <BsFillMoonStarsFill className="w-8 h-8 swap-off" />
          </label>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
