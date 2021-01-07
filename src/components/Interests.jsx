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

    let content = "When I'm not programming, I spend much of my time reading and writing. My preferred genres of fiction include transgressive, minimalism, hyper-realism, and absurdism. Keep your Fifty Shades and give me Kafka, Camus, Palahniuk, and Hempel. My preferred nonfiction genres consist of philosophy, economics, and history. Thinkers I especially admire are Jeffrey Tucker, Murray Rothbard, Ayn Rand, Christopher Hitchens, G Edward Griffin, and Larken Rose."

    let content2 = "Should you find me not on a computer or in a book, I most likely am hiking with my pug, Waffles, playing chess, getting tattooed, or juggling. Yes, I juggle."

    let content3 = "Above all, however, I'm most interested in creating a more peaceful world. The most efficient way to do that, in my opinion, lies in giving every single person the tools and opportunities to freely trade."

    let content4 = "We're all revolutionaries in crypto. Let's make it cool to seek profits, exercise individual liberties, and add value to the world at large."

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
            <P>
                { content3 }
            </P>
            <P>
                { content4 }
            </P>
        </Container>
    )
}
