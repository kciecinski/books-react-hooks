import React, {useRef, useEffect, useState} from 'react'
import {Card, CardHeader, CardHeaderTitle, CardFooter, CardContent, CardImage, Media, MediaLeft, Image, MediaContent, Title, Subtitle, Content} from 'bloomer'
import {Link} from 'react-router-dom'

export default function BookCard(props) {

const  createMarkup = () => { return {__html: props.info}; };


    

  return (
    <Card>
        <CardHeader>
            <CardHeaderTitle>
                {props.authors}
            </CardHeaderTitle>
        </CardHeader>
        <CardContent>
            <Media>
                <MediaLeft>
                    <Image isSize='96x96' src={props.smallThumb} />
                </MediaLeft>
                <MediaContent>
               
                    <Title className="media-content-title" isSize={4}> {props.title}</Title>
                </MediaContent>
            </Media>
            <Content dangerouslySetInnerHTML={createMarkup()}>
            </Content>
        </CardContent>
        <CardFooter>
            <Link to={{ pathname :`/books/${props.title}`, state:{id:props.id} }}>See More</Link>
        </CardFooter>
    </Card>
  )
}
