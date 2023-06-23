import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faBurger } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';

export default function Header(props) {
    let user = props.userName || <span><Link to="/login">Log in</Link></span>;
//  Hamburger menu toggle
    const [hamburgerState, setHamburgerState] = React.useState("navbar--menu hidden");
    function toggleMenu() {
        setHamburgerState(hamburgerState === "navbar--menu hidden" ? "navbar--menu" : "navbar--menu hidden");
    }
//  Return userName or 'Log in' in Header component
    let loggedIn = () => {
        if (user === props.userName) {
            return ( // Return userName and hamburger menu function
                <div className="navbar--user" >
                    <h4 onClick={toggleMenu}>{user} <FontAwesomeIcon icon={faBurger} size="2xl" /></h4>
                </div>
            )
        } else {
            return ( // Return 'Log in' and toggleForm function
                <div className="navbar--user" >
                    <h4>{user}</h4>
                </div>
            )
        }
    }

    const { userInfo } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [logoutApiCall] = useLogoutMutation();

    const logoutHandler = async () => {
        try {
        await logoutApiCall().unwrap();
        dispatch(logout());
        nav('/');
        } catch (err) {
        console.log(err);
        }
    }
    
    return (
        <header>
            <nav className="navbar">
                <div className="navbar--title">
                    <h2><a href="/main.html">Food/Off</a></h2>
                </div>
                {loggedIn()}
                <ul className={hamburgerState}>
                    <li className="navbar--item">
                        <a href="#">Profile</a>
                    </li>
                    <li className="navbar--item">
                        <a href="/entries.html">Food lists</a>
                    </li>
                    <li className="navbar--item">
                        <span onClick={ logoutHandler }>Logout</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}