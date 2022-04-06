import { Link, NavLink } from "react-router-dom";

const SideBar = () => {
    return (
        <aside>
            <ul>
                <li>
                <NavLink to="/profile/dashboard" className={(navData) => (navData.isActive ? "activeLink" : "")}>
                    Dashboard
                </NavLink>
                </li>
                <li>
                <NavLink to="/profile/download" className={(navData) => (navData.isActive ? "activeLink" : "")}>
                    Download
                </NavLink>
                </li>
            </ul>
        </aside>
      );
}
 
export default SideBar;