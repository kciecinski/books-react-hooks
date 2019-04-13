import React from 'react'
import {Container, Hero, HeroHeader, HeroBody, HeroFooter} from 'bloomer';

export default function Layout(props) {
  return (
    <Hero isColor='info' isFullHeight>
    <HeroHeader>
        navbar
    </HeroHeader>
    <HeroBody>
        <Container hasTextAlign='centered'>
          {props.children}
        </Container>
    </HeroBody>

    <HeroFooter>
        fotter
    </HeroFooter>
  </Hero>
  )
}
