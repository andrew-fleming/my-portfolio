import React from 'react'
import styled from 'styled-components'

import solidity from '../assets/solidity.svg'
import truffle from '../assets/truffle.svg'
import react from '../assets/react.svg'
import node from '../assets/node.png'
import openzeppelin from '../assets/openzeppelin.svg'

const Container = styled.div`
    margin-top: 5rem;
    margin-left: 7rem;
    height: 40rem;
    width: 100%;
`;

const Title = styled.div`
    font-size: 2.5rem;
    margin-bottom: 5rem;
`;

const Subtitle = styled.div`
    font-size: 1.5rem;
`;

const Icons = styled.div`
    margin-top: 2rem;
    display: flex;
    align-items: center;
`;

const Img = styled.img`
    margin-right: 2rem;
    height: 3rem;
    width: 3rem;
`;

const Img2 = styled(Img)`
    height: 5rem;
    width: 3.8rem;
`;

const Img3 = styled(Img2)`
    width: 10rem;
`;

export default function Skills() {

    let tools = 'Programming Languages & Tools'

    return (
        <Container>
            <Title>
                Skills
            </Title>
            <Subtitle>
                { tools }
            </Subtitle>
            <Icons>
                <Img src={ solidity } alt='Solidity logo'/>
                <Img src={ truffle } alt='Truffle logo' />
                <Img2 src={ react } alt='React logo' />
                <Img src={ node } alt='Node logo' />
                <Img3 src={ openzeppelin } alt='OpenZeppelin logo' />
            </Icons>
        </Container>
    )
}
