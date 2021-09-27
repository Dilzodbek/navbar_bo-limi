import React from "react";
import { NavLink } from "react-router-dom";
import bektechno from '../img/bektechno.png';



function Nav() {
    const [click, setClick] = React.useState(false);

    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);

    return (
        <div>
            <div className="bektechno">
                <div className="hour">
                    <p>Har kuni:</p>
                    <p>9:00 AM-5:30 PM</p>
                </div>
                <div>
                    <img className="logo" src={bektechno} alt=""/>
                </div>
            </div>
            <div className={click ? "main-container" : ""} onClick={() => Close()} />
            <nav className="navbar navbar-expand-lg" onClick={(e) => e.stopPropagation()}>
                <div className="nav-container container">
                    <ul className={click ? "nav-menu active" : "nav-menu"}>

                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/home"
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Bosh sahifa
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/catalog"
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Katalog
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/shop"
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Do'kon haqida
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/supplying"
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Yetkazib berish
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/link"
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Bog'lanish
                            </NavLink>
                        </li>

                        
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fa fa-times" : "fa fa-bars"}>
                        </i>
                    </div>
                </div>
            </nav>
        </ div>
    );
} export default Nav;

