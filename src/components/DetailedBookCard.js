import React from 'react'
import Layout from '../Layout'
import {Box, Title, Content, Columns, Column} from 'bloomer'

export default function DetailedBookCard(props) {
  console.log(props)
  const propsExcluded = props.location.state.props
  return (
  <Layout>
    <Box style={{display: "flex"}}>
      <Columns>
        <Column isSize='1/4'>
          <img src={propsExcluded.bigThumb} alt={`Cover of ${propsExcluded.title}`}/>
        </Column>
        <Column>
          <Title className="media-content-title">{propsExcluded.title}</Title>
          <Content> {propsExcluded.desc} </Content>
        </Column>
      </Columns>
    </Box>
    
    </Layout>
  )
}
