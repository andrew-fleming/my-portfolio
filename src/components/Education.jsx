import React from 'react'
import styled from 'styled-components'

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

const School = styled.div`
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
`;

const Color = styled.div`
    color: grey;
    text-shadow: .5px .5px black;
`;

export default function Education() {

    let goddard = 'Goddard College'
    let goddardTime = '2012 - 2015'
    let snc = 'Sierra Nevada College'
    let sncTime = '2015 - 2017'
    let bfa = 'BFA Creative Writing'
    let mfa = 'MFA Creative Writing'
    let location1 = 'Plainfield, VT'
    let location2 = 'Lake Tahoe, NV'

    

    return (
        <Container>
            <Title>
                Education
            </Title>
            <School>
                { goddard }
                <Color>
                    { goddardTime }
                </Color>
            </School>
            <div>
               { location1 }
            </div>
            { bfa }

            <School>
                { snc }
                <Color>
                    { sncTime }
                </Color>
            </School>
            <div>
                { location2 }
            </div>
            { mfa }
        </Container>
    )
}
