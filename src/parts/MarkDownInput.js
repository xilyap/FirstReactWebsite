import React from "react";
import MDEditor from '@uiw/react-md-editor';
var state = false;
export default function MarkDownInput() {
	const [value, setValue] = React.useState("**Статья**");
	return (
	  <div className="container">
		<MDEditor
		  value={value}
		  onChange={setValue}
		/>
	  </div>
	);
  }
  function submitButton(e){
	state = true;
  }


