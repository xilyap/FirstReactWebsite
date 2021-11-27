import React from "react";
import MDEditor from '@uiw/react-md-editor';
import { Accordion } from "react-bootstrap";
export default function BaseArticle(props) {
	return (
		
		
		<Accordion >
  		<Accordion.Item eventKey="0">
    	<Accordion.Header><h3>{props.title}</h3></Accordion.Header>
    	<Accordion.Body>
		<p><MDEditor.Markdown source = {props.article}/></p>
    	</Accordion.Body>
  		</Accordion.Item>
		</Accordion>
		
	);
  }
  
