import React from 'react'
import styled from 'styled-components'

import coinflip from '../assets/coinflip.png'
import hodlfarm from '../assets/hodlfarm.png'

const Container = styled.div`
    margin-top: 5rem;
    padding-left: 7rem;
    width: 80%;
`;

const Title = styled.div`
    font-size: 2.5rem;
    margin-bottom: 5rem;
    background-color: #e5e500;
`;

const Subtitle = styled.div`
    font-size: 1.5rem;
    color: grey;
    text-shadow: .5px .5px black;
    margin-bottom: 1rem;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    margin-bottom: 4rem;
`;

export default function Projects() {
    return (
        <Container>
            <Title>
                Projects
            </Title>
            <Subtitle>
                Coinflip
            </Subtitle>
            <Img src={ coinflip } alt='Coinflip application' />
            <Subtitle>
                Hodl Farm
            </Subtitle>
            <Img src={ hodlfarm } alt='Hodl Farm application' />
        </Container>
    )
}
