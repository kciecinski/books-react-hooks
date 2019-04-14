import React, {useState} from 'react';
import {Field, Control, Input, Button} from 'bloomer'
import {withRouter} from 'react-router-dom';

function BooksSearchBar(props) {

  const [inputValue, setInputValue] = useState("");

  function handleClick(){
    props.history.push(`/bookList?q=${inputValue}`)
  }

  function handleKey(e){
    if(e.which == 13) {
      handleClick();
    }
  }

  return (
    <Field hasAddons="fullwidth">
      <Control>
        <Input  onKeyPress={handleKey} isSize="medium" type="text" placeholder='eq. Harry Potter' onChange={(e) => setInputValue(e.target.value)} />
      </Control>
      <Button isSize="medium" isColor="succes" onClick={handleClick}>
        Submit
      </Button>
    </Field>
  )
}
export default withRouter(BooksSearchBar)