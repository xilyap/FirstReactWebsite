import MDEditor from "@uiw/react-md-editor";
import React, { useEffect, useState } from "react";
import MarkDownInput from "./MarkDownInput";
import NewGenerate from "./NewGenerate";
import Cookies from 'universal-cookie';
import axios from 'axios';
import './NewGenerate.css';

export default function EditorContents() {
	var cookies = new Cookies();
	function RemoveArticle(Id){
		console.log(Id);
		var cookie = cookies.get('userdata', { path: '/',sameSite:"strict",secure:true})
		cookie['articleId'] = Id;
		var requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(cookie) // body data type must match "Content-Type" header
			
		};
		fetch('/delete-article', requestOptions)
			.then(response => response.json())
			.then(data => 
			{
			  console.log(data);
			  window.location.reload();
			});
	}
	function SubmitArticle(title,content){
		var cookie = cookies.get('userdata', { path: '/',sameSite:"strict",secure:true})
		cookie['title'] = title;
		cookie['article'] = content;
		var requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(cookie) // body data type must match "Content-Type" header
		};
		console.log(JSON.stringify(cookie))
		var request = new XMLHttpRequest();
		request.open('POST', '/post-article', true);
		request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
		request.send(JSON.stringify(cookie));
		window.location.reload();
		axios.post(`/post-article`, cookie)
      	



	}
	
	return (
		<div>
		<MarkDownInput ArticleSubmit={SubmitArticle}/>
		<NewGenerate removeArticle={RemoveArticle} isEditorMode={true}/>
		</div>
	)
  }