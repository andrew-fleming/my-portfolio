import React from 'react'
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
    return (
        <div>
            <Whole>
                <Side>
                    <Sidebar/>
                </Side>
                <MainContent>
                    <About />
                    <PageBreak />
                    <Skills />
                    <PageBreak />
                    <Projects />
                    <PageBreak />
                    <Certifications />
                    <PageBreak />
                    <Interests />
                    <PageBreak />
                    <Education />
                </MainContent>
            </Whole>
        </div>
    )
}
