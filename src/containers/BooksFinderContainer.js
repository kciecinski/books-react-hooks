import React from 'react'
import Layout from '../Layout'
import {Title, Container} from 'bloomer'
import BooksSearchBar from '../components/BooksSearchBar'

export default function BooksFinderContainer() {
  return (
    <Layout>
      <Title>Books Finder</Title>
      <Container>
      <BooksSearchBar />
      </Container>
    </Layout>
  )
}
