import React from 'react'
import {Card, CardHeader, CardHeaderTitle, CardFooter, CardContent, CardImage, Media, MediaLeft, Image, MediaContent, Title, Subtitle, Content} from 'bloomer'
import {Link} from 'react-router-dom'

export default function BookCard(props) {
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
            <Content>
              {props.desc}
            </Content>
        </CardContent>
        <CardFooter>
            <Link to={{ pathname :`/books/${props.title}`, state:{props} }}>See More</Link>
        </CardFooter>
    </Card>
  )
}
