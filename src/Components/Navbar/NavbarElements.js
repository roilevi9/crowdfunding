import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import {FaBars} from "react-icons/fa";



export const Nav = styled.nav`
background: ffffff;
border: 1px solid palevioletred;
border-color: white;
height: 90px;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
`;

export const NavLink = styled(Link)`
color: #aaaaaa;
font-size: x-large;
font-family: Arial, Helvetica, sans-serif;
text-decoration: none;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
	color: #ffffff;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #aaaaaa;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const Logo = styled.img`
margin: 5px;
max-width: 95px;
height: auto;
`;
