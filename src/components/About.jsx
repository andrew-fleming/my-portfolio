import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const Title = styled.div`
    font-size: 3.5rem;
`;

const Color = styled.span`
    color: grey;
    text-shadow: 1px 1px black;
`;

export default function About() {

    let firstName = 'ANDREW '
    let lastName = 'FLEMING'

    return (
        <Container>

            <Title>

                {firstName} 
                <Color>
                {lastName}
                </Color>

            </Title>

        </Container>
    )
}
