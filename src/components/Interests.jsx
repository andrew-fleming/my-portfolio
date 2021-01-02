import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin-top: 5rem;
    margin-left: 7rem;
    height: 42.8rem;
    width: 100%; 
`;

const Title = styled.div`
    font-size: 2.5rem;
    margin-bottom: 5rem;
    background-color: #e5e500;
`;

export default function Interests() {
    return (
        <Container>
            <Title>
                Interests
            </Title>
        </Container>
    )
}
