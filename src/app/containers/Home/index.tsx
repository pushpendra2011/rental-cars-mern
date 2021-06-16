import styled from 'styled-components';
import tw from 'twin.macro'
import Navbar from '../../components/navbar';

const PageContainer = styled.div`
${tw`
flex
flex-col
w-full
h-full
items-center
`}
`

export const HomePage = () => {
    return (
        <PageContainer>
            <Navbar/>
        </PageContainer>
    )
}
