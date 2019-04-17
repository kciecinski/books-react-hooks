import React, {useState, useEffect, useRef} from 'react'
import BookCard from './BookCard';

export default function BooksList(props) {


  const [books, setBooks] = useState([]);

  useEffect( ()=>{
    const fetchData = async () =>{
      try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes${props.query}&key=AIzaSyBjn3Oz-IOLSOmj117hPABiSFhErthbumc`);
        const responseJson = await response.json();
        if(JSON.stringify(responseJson.items) !== JSON.stringify(books)){
          console.log(responseJson.items)
          setBooks(responseJson.items);
        }
      } catch(err) {
        setBooks([]);
      }
    };
    fetchData();
  });

  return (
    <>
    {  books.map((book)=> 
      <BookCard key={book.id} title={book.volumeInfo.title} authors={book.volumeInfo.authors} desc={book.volumeInfo.description} smallThumb={ book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : ""}
      bigThumb={ book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ""} info ={book.searchInfo? book.searchInfo.textSnippet : ""} id={book.id}
      />
    )}
    </>
  )
} 