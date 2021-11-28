import React from "react";
import MDEditor from '@uiw/react-md-editor';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
var state = false;
export default function MarkDownInput(props) {
	const [value, setValue] = React.useState("");
	const [formValue, setFormValue] = React.useState("");
	function handleChange(event){
		setFormValue(event.target.value)
	}
	function submitButton(e){
		props.ArticleSubmit(formValue,value)
	}
	
	return (
	  <div className="container">
	  	<Form.Control type="text" placeholder="Название статьи" 
			value={formValue}
			onChange={handleChange}
		  />
		<MDEditor
		  value={value}
		  onChange={setValue}
		/>
		<Button variant="dark" onClick={submitButton}>Отправить</Button>
	  </div>
	);
  }
  

