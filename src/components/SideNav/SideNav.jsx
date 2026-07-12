import { NavLink, Link } from "react-router-dom";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import { showSidenav } from "../../utils/showSidenav";
import sunIcon from "../../assets/images/sun.svg";
import moonIcon from "../../assets/images/moon.svg";
import crossWhiteIcon from "../../assets/images/cross-white.svg";
import crossBlackIcon from "../../assets/images/cross-black.svg";

function SideNav() {
    let [isDarkmode, setIsDarkmode] = useState(false)

    useEffect(() => {
        switch (localStorage.getItem("theme")) {
        case null:
            localStorage.setItem("theme","light")
            setIsDarkmode(false)
            break
        case "light":
            document.body.classList.remove("darkmode");
            break
        case "dark":
            setIsDarkmode(true)
            document.body.classList.add("darkmode");
            break
        }  
    },[])

    function toggleTheme() {
        if (localStorage.getItem("theme") === "dark") {
            localStorage.setItem("theme","light");
            document.body.classList.remove("darkmode");
            setIsDarkmode(false);
        } else if (localStorage.getItem("theme") === "light") {
            localStorage.setItem("theme","dark");
            document.body.classList.add("darkmode");
            setIsDarkmode(true);
        }
    }; 

    return (
        <nav className="sidenav" data-testid="SideNav">
            <div className="side_nav_buttons">
                <Button className="button_toggle_theme" dataTestId="ButtonToggleTheme" onClick={toggleTheme}>
                    {isDarkmode 
                    ?<img src={sunIcon} alt="Sun"/>
                    :<img src={moonIcon} alt="Moon"/>
                    }
                </Button>
                <Button className="button_hide_sidenav" dataTestId="ButtonHideSidenav" onClick={showSidenav}>
                    {isDarkmode 
                    ?<img src={crossWhiteIcon} alt="Cross" />
                    :<img src={crossBlackIcon} alt="Cross" />
                    }
                </Button>
            </div>
            <ul className="sidenav_list">
                <li className="list_li">
                    <NavLink to="/" className={({ isActive }) => isActive ? "link-active" : ""} end>Home</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default SideNav;


