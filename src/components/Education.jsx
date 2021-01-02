import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin-top: 5rem;
    margin-left: 7rem;
    height: 60rem;
    width: 100%;
`;

const Title = styled.div`
    font-size: 2.5rem;
`;

const School = styled.div`
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
`;

export default function Education() {

    let goddard = 'Goddard College'
    let goddardTime = '2012 - 2015'
    let snc = 'Sierra Nevada College'
    let sncTime = '2015 - 2017'
    let bfa = 'BFA Creative Writing'
    let mfa = 'MFA Creative Writing'

    

    return (
        <Container>
            <Title>
                Education
            </Title>
            <School>
                { goddard }
                <div>
                { goddardTime }

                </div>
            </School>
        </Container>
    )
}
