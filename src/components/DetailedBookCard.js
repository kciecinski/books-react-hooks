import React, {useEffect, useState} from 'react'
import Layout from '../Layout'
import {Box, Title, Content, Columns, Column} from 'bloomer'

export default function DetailedBookCard(props) {
  
  const [book, setBook] = useState(null);



  useEffect( ()=>{
    const fetchData = async () =>{
      try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${props.location.state.id}`);
        const responseJson = await response.json();
          setBook(responseJson);
      } catch(err) {
        setBook({});
      }
    };
    fetchData();
  },[]);

  if(!book){
    return null;
  }

  return (
  
  <Layout>
    {          console.log(book)
}
    <Box style={{display: "flex"}}>
      <Columns>
        <Column isSize='1/4'>
          <img src={book.volumeInfo.imageLinks[Object.keys(book.volumeInfo.imageLinks)[Object.keys(book.volumeInfo.imageLinks).length - 1]]} alt={`Cover of ${book.volumeInfo.title}`}/>
        </Column>
        <Column>
          <Title className="media-content-title">{book.volumeInfo.title}</Title>
          <Content> {book.volumeInfo.description} </Content>
        </Column>
      </Columns>
    </Box>
  </Layout>
  )
}
