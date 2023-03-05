import React from "react";
import { NavMenu, Nav, NavLink, Logo } from "./NavbarElements";
import LogoImg from "../../assets/LOGO2.png"


const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
            <Logo src ={LogoImg}></Logo>
		<NavLink to="/Home" activeStyle>
			Home
		</NavLink>
		<NavLink to="/CreateCampaign" activeStyle>
            Create Campaign
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;

