import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faBurger, faX } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
      toggleMenu();
    } catch (err) {
      console.log(err);
    }
  }

  //  Hamburger menu toggle
  const [hamburgerState, setHamburgerState] = React.useState("navbar--menu hidden");

  function toggleMenu() {
      setHamburgerState(hamburgerState === "navbar--menu hidden" ? "navbar--menu" : "navbar--menu hidden");
  }

  return (
    <header>
            <nav className="navbar">
                <div className="navbar--title">
                    <LinkContainer to="/">
                        <h2><a href="/">Food/Off</a></h2>
                    </LinkContainer>
                </div>

                {userInfo ? (
                    <>
                    <div className="navbar--user link-cursor">
                        <h4 onClick={toggleMenu}>{userInfo.username} <FontAwesomeIcon icon={faBurger} size="2xl" /></h4>
                    </div>
                    <ul className={hamburgerState}>
                        <div className="x" onClick={toggleMenu}>
                            <FontAwesomeIcon icon={faX}  style={{color: "#ffffff",}}/>
                        </div>
                        <li className="navbar--item">
                            <LinkContainer to="/profile">
                               <span className="link-cursor" onClick={toggleMenu}>Profile</span>
                            </LinkContainer>
                        </li>
                        <li className="navbar--item">
                            <LinkContainer to="/lists">
                                <span className="link-cursor" onClick={toggleMenu}>Food lists</span>
                            </LinkContainer>
                        </li>
                        <li className="navbar--item">
                            <span className="link-cursor" onClick={ logoutHandler }>Logout</span>
                        </li>
                    </ul>
                    </>
                ) : (
                    <>
                    <div className="navbar--user">
                        <LinkContainer to="/login">
                            <h4 className="link-cursor">Login</h4>
                        </LinkContainer>
                    </div>
                    </>
                )}

                {/* <ul>
                    <li className="navbar--item">
                        <a href="#">Profile</a>
                    </li>
                    <li className="navbar--item">
                        <a href="/entries.html">Food lists</a>
                    </li>
                    <li className="navbar--item">
                        <span onClick={ logoutHandler }>Logout</span>
                    </li>
                </ul> */}
            </nav>
        </header>
  );
};

export default Header;