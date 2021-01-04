import React, { useRef } from 'react'
import styled from 'styled-components'

import Sidebar from './Sidebar'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Certifications from './Certifications'
import Interests from './Interests'
import Education from './Education'


const Whole = styled.div`
    position: absolute;
    display: flex;
    justify-content: flex-start;
`;


const Side = styled.div`
    position: fixed;
    width: 20%;
    background-color: grey;
    height 48rem;
`;

const MainContent = styled.div`
    position: static;
    padding-left: 20%;
    margin-top: 13rem;
`;

const PageBreak = styled.header`
    height: .05rem;
    width: 100%;
    background-color: grey;
`;


export default function Main() {

    const aboutRef = useRef(null)
    const skillsRef = useRef(null)
    const projectsRef = useRef(null)
    const certificationsRef = useRef(null)
    const interestsRef = useRef(null)
    const educationRef = useRef(null)


    const handleAbout = () => {
        aboutRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    const handleSkills = () => {
        skillsRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    const handleProjects = () => {
        projectsRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    const handleCertifications = () => {
        certificationsRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    const handleInterests = () => {
        interestsRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    const handleEducation = () => {
        educationRef.current.scrollIntoView({ behavior: 'smooth' })
    }


    return (
        <div>
            <Whole>
                <Side>
                    <Sidebar 
                        handleAbout={handleAbout} 
                        handleSkills={handleSkills}
                        handleProjects={handleProjects}
                        handleCertifications={handleCertifications}
                        handleInterests={handleInterests}
                        handleEducation={handleEducation}
                    />
                </Side>
                <MainContent>
                    <About aboutRef={aboutRef}/>
                    <PageBreak />
                    <Skills skillsRef={skillsRef}/>
                    <PageBreak />
                    <Projects projectsRef={projectsRef}/>
                    <PageBreak />
                    <Certifications certificationsRef={certificationsRef}/>
                    <PageBreak />
                    <Interests interestsRef={interestsRef}/>
                    <PageBreak />
                    <Education educationRef={educationRef}/>
                </MainContent>
            </Whole>
        </div>
    )
}
