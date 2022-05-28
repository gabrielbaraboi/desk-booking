import "./Navbar.scss";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHouse,
	faMapLocationDot,
	faArrowRightToBracket,
	faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { logout } from "../../../Redux/Features/authenticationSlice";
import { deleteCookies } from "../../../Utils/UtilFunctions";

const Navbar = () => {
	const { isConnected } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const classComponent = "navbar-container";
	const logoClass = `${classComponent}__logo`;
	const menuClass = `${classComponent}__menu`;
	const menuListClass = `${menuClass}__list`;
	const menuItemClass = `${menuListClass}__item`;
	const navbarDividerClass = `${classComponent}__divider`;

	return (
		<nav className={classComponent}>
			<div className={logoClass}>
				<Link to="/">
					<FontAwesomeIcon icon={faMapLocationDot} />
					Book Desk
				</Link>
			</div>
			<div className={navbarDividerClass}></div>
			<div className={menuClass}>
				<ul className={menuListClass}>
					<li className={menuItemClass}>
						<Link to="/">
							<FontAwesomeIcon icon={faHouse} />
							Home
						</Link>
					</li>
					<li className={menuItemClass}>
						<Link to="/">
							<FontAwesomeIcon icon={faHouse} />
							About
						</Link>
					</li>
					<li className={menuItemClass}>
						<Link to="/">
							<FontAwesomeIcon icon={faHouse} />
							Contact
						</Link>
					</li>
				</ul>
			</div>
			<div className={navbarDividerClass}></div>
			<div className={menuClass}>
				<ul className={menuListClass}>
					{isConnected ? (
						<li className={menuItemClass}>
							<button
								onClick={() => {
									deleteCookies();
									dispatch(logout());
								}}
							>
								<FontAwesomeIcon icon={faArrowRightFromBracket} />
								Logout
							</button>
						</li>
					) : (
						<li className={menuItemClass}>
							<Link to="/login">
								<FontAwesomeIcon icon={faArrowRightToBracket} />
								Login
							</Link>
						</li>
					)}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
