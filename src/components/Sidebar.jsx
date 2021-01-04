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
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 1.3rem;
`;

const Section = styled.div`
    margin-top: .5rem;
    color: white;

    : hover {
        cursor: pointer;
        color: #e5e500;
    }
`;

const Img = styled.img`
    height: 9rem;
    width: 9rem;
    border-radius: 4.8rem;
`;



export default function Sidebar(props) {

    
    


    return (
        <Container>
            <div>
            <Circle>
                <Img src={ Self } alt='Me smiling in Mexico'/>
            </Circle>
            <SectionContainer>
                <Section onClick={props.handleAbout}>
                    About
                </Section>       
                <Section onClick={props.handleSkills}>
                    Skills
                </Section>
                <Section onClick={props.handleProjects}>
                    Projects
                </Section>
                <Section onClick={props.handleCertifications}>
                    Certifications
                </Section>
                <Section onClick={props.handleInterests}>
                    Interests
                </Section>
                <Section onClick={props.handleEducation}>
                    Education
                </Section>
            </SectionContainer>
            </div>
        </Container>
    )
}
