import React, {useState} from 'react';
import {Field, Control, Input, Button} from 'bloomer'
import {withRouter} from 'react-router-dom';

function BooksSearchBar(props) {

  const [books, setBooks] = useState([])

  function handleClick(){
    fetch('https://www.googleapis.com/books/v1/volumes?q=harry+potter')
    .then(function(response) {
      return response.json();
    })
    .then(function(responseJson) {
     props.history.push('/bookList?q=harry+potter')
    });
  }

  return (
    <Field hasAddons="fullwidth">
      <Control>
        <Input isSize="medium" type="text" placeholder='eq. Harry Potter' />
      </Control>
      <Button isSize="medium" isColor="succes" onClick={handleClick}>
        Submit
      </Button>
    </Field>
  )
}
export default withRouter(BooksSearchBar)