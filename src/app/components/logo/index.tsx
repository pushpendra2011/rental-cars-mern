import { AiOutlineCar } from 'react-icons/ai'
import styled from 'styled-components'
import tw from 'twin.macro'
const LogoContainer = styled.div`
${tw`flex items-center self-center`}
`

const TextContainer = styled.div`
${tw`
text-xl
md:text-2xl
font-bold
text-black
m-1
`}
`
const Logo = () => {
    return (
        <LogoContainer>
            <AiOutlineCar size={32} />
            <TextContainer>
                CarStore
            </TextContainer>
        </LogoContainer>
    )
}

export default Logo
