import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faTasks, faSearch, faClock, faBars, faBell } from "@fortawesome/free-solid-svg-icons";
import './Header.css';


function Header() {
    return (
        <div className="header">
             <FontAwesomeIcon icon={faBars} />
            <FontAwesomeIcon icon={faUsers} />
           
            <h1>The County Government Of: </h1>

            <FontAwesomeIcon icon={faBell} />
            <form className="search">
                <input type="text" placeholder="Search" />
                <button type="submit">

                </button>
            </form>
        </div>
    )
}

export default Header;

