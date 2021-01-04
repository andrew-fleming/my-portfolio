import React from 'react'
import styled from 'styled-components'

import eth from '../assets/eth.svg'

const Container = styled.div`
    margin-top: 5rem;
    margin-left: 7rem;
    height: 42.8rem;
    width: 80%; 
`;

const Title = styled.div`
    font-size: 2.5rem;
    margin-bottom: 3rem;
    background-color: #e5e500;
`;

const Subtitle = styled.div`
    color: grey;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    text-shadow: .5px .5px black;
`;

const Content = styled.span`
    margin-bottom: 1rem;
`;

const CourseDate = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: .5rem;
`;

const Img = styled.img`
    height: 1.5rem;
    width: 1.5rem;
`;

export default function Certifications(props) {

    const func = (course, date) => {
        return(
            <CourseDate>
                <div>
            <Img src={ eth } alt='Ethereum logo' />
            { course }
            </div>
            <div>
                {date}
            </div>
            </CourseDate>
        )
    }



    return (
        <Container ref={props.certificationsRef}>
            <Title>
                Certifications
            </Title>

            <Subtitle>
                Ivan on Tech Academy
            </Subtitle>
            
            <Content>
                {func('JavaScript Programming for Blockchain Developers', 'March 2020')}
                {func('Blockchain & Bitcoin 101', 'March 2020')}
                {func('Bitcoin Attacks', 'April 2020')}
                {func('Cryptography & Privacy Coins', 'May 2020')}
                {func('React Web Development 101', 'August 2020')}
                {func('Ethereum 101', 'March 2020')}
                {func('Ethereum Smart Contract Programming 101', 'March 2020')}
                {func('Ethereum Smart Contract Programming 201', 'October 2020')}
                {func('Ethereum Smart Contract Security', 'April 2020')}
            </Content>

        </Container>
    )
}
