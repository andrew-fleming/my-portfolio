import React from 'react'
import styled from 'styled-components'

import Self from '../assets/Self.jpeg'

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const Circle = styled.div`
    margin-top: 11rem;
    background-color: yellow;
    height: 8.9rem;
    width: 8.9rem;
    border: .6rem solid rgba(0,0,0, 0.3);
    border-radius: 5rem;
`;

const SectionContainer = styled.div`
    color: white;
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 1.3rem;
`;

const Div = styled.div`
    margin-top: .5rem;
`;

const Img = styled.img`
    height: 9rem;
    width: 9rem;
    border-radius: 4.8rem;
`;



export default function Sidebar() {
    return (
        <Container>
            <div>
            <Circle>
                <Img src={Self} alt='Me smiling in Mexico'/>
            </Circle>
            <SectionContainer>
                <Div>
                  About
                </Div>       
                <Div>
                    Skills
                </Div>
                <Div>
                    Projects
                </Div>
                <Div>
                    Certifications
                </Div>
                <Div>
                    Education
                </Div>
            </SectionContainer>
            </div>
        </Container>
    )
}
