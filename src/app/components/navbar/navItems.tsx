import { Link } from "react-router-dom"
import styled from "styled-components"
import tw from "twin.macro"
import {slide as Menu} from 'react-burger-menu'
import {useMediaQuery} from 'react-responsive';
import { SCREENS } from "../responsive";
import menuStyle from "./menuStyle";
const ListContainer = styled.ul`
${tw`
flex
list-none
`}
`

const NavItem = styled.li`
${tw`text-xs
md:text-base
text-black
font-medium
mr-1
md:mr-5
cursor-pointer
transition
duration-300
ease-in-out
hover:text-gray-700`}
`
const NavItems = () => {
   const isMobile = useMediaQuery({maxWidth: SCREENS.sm})
   return (
        isMobile ? <Menu styles={menuStyle}><ListContainer>
        <NavItem>
            <Link to="/home">Home</Link>
        </NavItem>
        <NavItem>
        <Link to="/products">Products</Link>
        </NavItem>
        <NavItem>
        <Link to="/services">Services</Link>
        </NavItem>
        <NavItem>
        <Link to="/contact">Contact</Link>
        </NavItem>
    </ListContainer></Menu> :
        <ListContainer>
            <NavItem>
                <Link to="/home">Home</Link>
            </NavItem>
            <NavItem>
            <Link to="/products">Products</Link>
            </NavItem>
            <NavItem>
            <Link to="/services">Services</Link>
            </NavItem>
            <NavItem>
            <Link to="/contact">Contact</Link>
            </NavItem>
        </ListContainer>
    )
}

export default NavItems
