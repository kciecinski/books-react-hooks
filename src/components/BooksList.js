import React, {useState, useEffect} from 'react'

export default function BooksList(props) {


  const [books, setBooks] = useState([]);

  
  useEffect( ()=>{
    const fetchData = async () =>{
      try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes${props.query}`);
        const responseJson = await response.json();
        setBooks(responseJson.items);
      } catch(err) {
        setBooks([]);
      }
    };
    fetchData()
  },[])


  return (
    <>
    {books.map((book)=>
      <div key={book.id}>{book.volumeInfo.title}</div>
    )}
    </>
  )
}
