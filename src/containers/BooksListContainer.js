import React, {useState, useEffect} from 'react'
import Layout from '../Layout'
import BooksList from '../components/BooksList'
import BooksSearchBar from '../components/BooksSearchBar'
import {Title, Container} from 'bloomer'
export default function BooksListContainer(props) {
//  const [buttonText, setButtonText] = useState("Click me, please");


  return (
      <Layout>
            <Title>Books List</Title>
            <Container>
            <BooksSearchBar />
            </Container>
            <Container>
              <BooksList query={props.location.search}/>
            </Container>
      </Layout>
  )
}
