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

const P = styled.p`
`;

export default function Interests(props) {

    let content = "I spend much of my time reading and writing when I'm not programming. My preferred genres of fiction include transgressive, minimalism, hyper-realism, and absurdism--the perfect book would be if Chuck Palahniuk had a baby with Amy Hempel and it was raised by Kafka and Kurt Vonnegut was the crazy uncle. My nonfiction interests constist of philosophy, economics, and history. Thinkers I especially admire are Jeffrey Tucker, Murray Rothbard, Ayn Rand, Christopher Hitchens, and Larken Rose."

    let content2 = "Should you find me not programming and sans book, I most likely am hiking with my pug, Waffles, playing chess, getting tattooed, or juggling. Yes, I juggle."


    return (
        <Container ref={props.interestsRef}>
            <Title>
                Interests
            </Title>
            <P>
                { content }
            </P>
            <P>
                { content2 }
            </P>
        </Container>
    )
}
