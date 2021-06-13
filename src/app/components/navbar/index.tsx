import styled from "styled-components"
import tw from "twin.macro"
import Logo from "../logo"
import NavItems from "./navItems"

const NavbarContainer = styled.div`
min-height: 70px;
${tw`
w-full
max-w-screen-xl
flex
flex-row
items-center
lg: pl-12
lg: pr-12
justify-between
`}
`
const Navbar = () => {
    return (
        <NavbarContainer>
            <Logo/>
            <NavItems/>
        </NavbarContainer>
    )
}

export default Navbar
