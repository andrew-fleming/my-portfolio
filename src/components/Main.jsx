import React from 'react'
import styled from 'styled-components'

import Sidebar from './Sidebar'
import About from './About'
import Education from './Education'


const Whole = styled.div`
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
    position: relative;
    margin-left: 20%;
    margin-top: 13rem;
`;

const PageBreak = styled.header`
    height: .05rem;
    width: 130%;
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
                    <Education />
                </MainContent>
            </Whole>
        </div>
    )
}
