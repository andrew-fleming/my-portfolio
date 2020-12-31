import React from 'react'
import styled from 'styled-components'

import Sidebar from './Sidebar'
import About from './About'


const Whole = styled.div`
    width: 100%;
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
    width: 80%;
    margin-top: 13rem;
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
                </MainContent>
            </Whole>
        </div>
    )
}
