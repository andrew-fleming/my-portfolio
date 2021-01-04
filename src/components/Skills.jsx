import React from 'react'
import styled from 'styled-components'

import html5 from '../assets/html5.png'
import css3 from '../assets/css3.png'
import js from '../assets/js.png'
import solidity from '../assets/solidity.svg'
import truffle from '../assets/truffle.svg'
import react from '../assets/react.svg'
import node from '../assets/node.png'
import openzeppelin from '../assets/openzeppelin.svg'

const Container = styled.div`
    margin-top: 5rem;
    padding-left: 7rem;
    height: 42.8rem;
    width: 80%;
`;

const Title = styled.div`
    font-size: 2.5rem;
    margin-bottom: 5rem;
    background-color: #e5e500;
`;

const Subtitle = styled.div`
    font-size: 1.5rem;
`;

const Icons = styled.div`
    margin-top: 2rem;
    display: flex;
    align-items: center;
`;

const Img = styled.img`
    margin-right: 2rem;
    height: 3rem;
    width: 3rem;
`;

const Img2 = styled(Img)`
    height: 5rem;
    width: 3.8rem;
`;

const Img3 = styled(Img2)`
    width: 10rem;
`;

const ImgHTML = styled(Img)`
    height: 4.8rem;
    width: 4.8rem;
`;

const ImgCSS = styled(Img)`
    height: 4rem;
    width: 4rem;
`;

export default function Skills(props) {

    let tools = 'Programming Languages & Tools'

    return (
        <Container ref={props.skillsRef}>
            <Title>
                Skills
            </Title>
            <Subtitle>
                { tools }
            </Subtitle>
            <Icons>
                <ImgHTML src={ html5 } alt='HTML5 logo' />
                <ImgCSS src={ css3 } alt='CSS3 logo' />
                <Img src={ js } alt='JaveScript logo' />
                <Img src={ solidity } alt='Solidity logo'/>
                <Img src={ truffle } alt='Truffle logo' />
                <Img2 src={ react } alt='React logo' />
                <Img src={ node } alt='Node logo' />
                <Img3 src={ openzeppelin } alt='OpenZeppelin logo' />
            </Icons>
        </Container>
    )
}
