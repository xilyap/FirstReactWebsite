import React from "react";
import MDEditor from '@uiw/react-md-editor';
import Button from 'react-bootstrap/Button'
export default function BaseArticle(props) {
	function removeArticle(event){
		props.removeArticle(props.Id);
	}
	if (props.isEditorMode == true)
	return (
		
		<div className='main-article'>
		<h3>{props.title}<Button onClick={removeArticle} className='justify-content-end' variant="dark">X</Button></h3>
		<p><MDEditor.Markdown source = {props.article}/></p>
    	</div>
		
	);
	else 
	return (
		
		<div className='main-article'>
		<h3>{props.title}</h3>
		<p><MDEditor.Markdown source = {props.article}/></p>
    	</div>
		
	);
  }
  
