import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosHome } from "react-icons/io";
import { BsPeopleFill,BsFillChatDotsFill } from "react-icons/bs";
import styled from 'styled-components';

const NavBarCont = styled.div`
    position: fixed;
    right: 0;
    left: 0;
    bottom: 20px;
    z-index: 10;
    margin-right: auto;
    margin-left: auto;
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #c2c2c2;
    border-radius: 20px;
    padding: 5px 0;
    a {
        color: #333333;
        text-decoration: none;
        &:hover {
            color: #777777;
        }
    }
`;

const NavBar = () => {

    return ( 
        <NavBarCont>
            <Link to="/"><IoIosHome size={45} /></Link>
            <Link to="/"><BsPeopleFill size={45} /></Link>
            <Link to="/"><BsFillChatDotsFill size={45} /></Link>
        </NavBarCont>
     );
}
 
export default NavBar;