import MDEditor from "@uiw/react-md-editor";
import React, { useEffect, useState } from "react";
import MarkDownInput from "./MarkDownInput";
import NewGenerate from "./NewGenerate";
import Cookies from 'universal-cookie';
import axios from 'axios';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
export default function BaseArticle(props) {
	var cookies = new Cookies();

	const [ContentsFormValue, setValue] = React.useState(props.article);
	const [isEditMode, setEditMode] = React.useState(false);
	const [TitleFormValue, setTitleFormValue] = React.useState(props.title);
	function removeArticle(event){
		props.removeArticle(props.Id);
	}
	function EditMode(event){
		setEditMode(true)
	}
	function handleChange(event){
		setTitleFormValue(event.target.value)
	}
	function submitButton(e){
		var cookie = cookies.get('userdata', { path: '/',sameSite:"strict",secure:true})
		cookie['articleId'] = props.Id;
		cookie['title'] = TitleFormValue;
		cookie['article'] = ContentsFormValue;
		console.log(JSON.stringify(cookie))
		axios.post(`/replace-article`, cookie)
		console.log('/replace-article')
		setEditMode(false)
		props.title = TitleFormValue
		props.article = ContentsFormValue
	}
	if(isEditMode)
	return(
		<div className='main-article'>
		<Form.Control type="text" placeholder="Название статьи" 
			value={TitleFormValue}
			onChange={handleChange}
		  />
		<MDEditor
		  value={ContentsFormValue}
		  onChange={setValue}
		/>
		<div className='space-between'>
		<Button variant="dark" onClick={(event)=>{setEditMode(false)}}>Отмена</Button>
		<Button variant="dark" onClick={submitButton}>Отправить</Button>
		</div>
		
    	</div>
	)
	if (props.isEditorMode == true)
	return (
		
		<div className='main-article'>
		<h3>{props.title}<Button onClick={EditMode} className='justify-content-end' variant="dark">Редактировать</Button><Button onClick={removeArticle} className='justify-content-end' variant="dark">X</Button></h3>
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
  
