import { NavLink } from "react-router-dom";
import { Link} from "react-router-dom";

const items = [
  {name: "Home", to:"/"},
  {name: "About-us", to:"/about-us"},
  {name: "Profile", to:"/profile"},
  {name: "Post", to:"/post"},
]

const Navigation = () => {
    return ( 
      <header>
        <nav>
          <ul>
            {items.map((item) => {
              return(
                <li key={item.to}>
                  <NavLink 
                    to={item.to}
                    className={(navData) => (navData.isActive ? "activeLink" : "")}
                  >
                    {item.name}
                  </NavLink>
                </li>
              )
              
            })}
          </ul>
        </nav> 
      </header>
     );
}
 
export default Navigation;