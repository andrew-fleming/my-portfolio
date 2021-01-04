import React from 'react'
import styled from 'styled-components'

import coinflip from '../assets/coinflip.png'
import hodlfarm from '../assets/hodlfarm.png'

const Container = styled.div`
    margin-top: 5rem;
    padding-left: 7rem;
    width: 80%;
`;

const Title = styled.div`
    font-size: 2.5rem;
    margin-bottom: 5rem;
    background-color: #e5e500;
`;

const Subtitle = styled.div`
    font-size: 1.5rem;
    color: grey;
    text-shadow: .5px .5px black;
    margin-bottom: 1rem;
`;

const AlignImg = styled.div`
    display: flex;
    justify-content: center;
`

const Img = styled.img`
    width: 80%;
    height: 80%;
`;

const Ul = styled.ul`
    padding-left: 8rem;
    color: blue;
    padding-bottom: 3rem;
`;

const Li = styled.li`
    width: 15%;
    :hover {
        color: yellow;
        background-color: grey;
        cursor: pointer;
    }
`;

export default function Projects(props) {


    /**
     * @notice The following functions are called onClick in order to send the user to external addresses.
     * 
     * @notice This first set of handle functions pertain to the Coinflip dApp.
     */
    const handleCoinCode = (e) => {
        e.preventDefault()
        window.open(window.location.replace('https://github.com/andrew-fleming/project-coinflip-v-6'))
    }

    const handleCoinVideo = (e) => {
        e.preventDefault()
    }

    const handleCoinApp = (e) => {
        e.preventDefault()
        window.open(window.location.replace('https://andrew-fleming.github.io/project-coinflip-v-6/'))
    }

    const handleCoinWriteup = (e) => {
        e.preventDefault()
    }

    /**
     * @notice The following functions pertain to the Hodl Farm dApp
     */

    const handleHodlCode = (e) => {
        e.preventDefault()
        window.open(window.location.replace('https://github.com/andrew-fleming/yield-farm'))
    }

    const handleHodlVideo = (e) => {
        e.preventDefault()
    }

    const handleHodlApp = (e) => {
        e.preventDefault()
        window.open(window.location.replace('https://andrew-fleming.github.io/yield-farm/'))
    }

    const handleHodlWriteup = (e) => {
        e.preventDefault()
    }


    return (
        <Container ref={props.projectsRef}>
            <Title>
                Projects
            </Title>
            <Subtitle>
                Coinflip
            </Subtitle>
            <AlignImg>
                <Img src={ coinflip } alt='Coinflip application' />
            </AlignImg>
            <Ul>
                <Li onClick={ handleCoinCode } >Code</Li>
                <Li>Demo Video</Li>
                <Li onClick={ handleCoinApp } >Live Application</Li>
                <Li>Writeup</Li>
            </Ul>
           
            <Subtitle>
                Hodl Farm
            </Subtitle>
            <AlignImg>
                <Img src={ hodlfarm } alt='Hodl Farm application' />
            </AlignImg>
            <Ul>
                <Li onClick={ handleHodlCode } >Code</Li>
                <Li>Demo Video</Li>
                <Li onClick={ handleHodlApp } >Live Application</Li>
                <Li>Writeup</Li>
            </Ul>
        </Container>
    )
}
