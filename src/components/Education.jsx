import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin-top: 5rem;
    margin-left: 7rem;
    height: 42.8rem;
    width: 80%;
`;

const Title = styled.div`
    font-size: 2.5rem;
    margin-bottom: 5rem;
    background-color: #e5e500;
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

export default function Education(props) {

    const func = (school, year, city, degree) => {
        return(
            <>
                <School>
                    <Color>
                        { school }
                    </Color>
                    { year }
                </School>
                { city }
                <div>
                    { degree }
                </div>
            </>
        )
    }

    

    return (
        <Container ref={props.educationRef}>
            <Title>
                Education
            </Title>
            {func('Goddard College', '2012 - 2015', 'Plainfield, VT', 'BFA Creative Writing')}
            {func('Sierra Nevada College', '2015 - 2017', 'Incline Village, NV', 'MFA Creative Writing')}
            
        </Container>
    )
}
