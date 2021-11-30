import React, { useEffect, useState } from "react";
import './App.css';
import Bar from './parts/NavBar'
import NewGenerate from './parts/NewGenerate';
import Cookies from 'universal-cookie';
import NavBarLogged from "./parts/NavBarLogged";
import EditorContents from "./parts/EditorContents";
const url = document.url;
var items;

function App() {
    const cookies = new Cookies();
const [credential, setCredential] = useState(cookies.get('userdata',{ path: '/',sameSite:"strict",secure:true}));
  function Auth(login, password){

      var item ={
        name:login,
        pass:password
      };
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item) // body data type must match "Content-Type" header
    };
      fetch('/auth', requestOptions)
        .then(response => response.json())
        .then(data => 
        {
          console.log(data);
          cookies.set('userdata',data, { path: '/',sameSite:"strict",secure:true})
          setCredential(cookies.get('userdata',{ path: '/',sameSite:"strict",secure:true}))
        });

  }
  
  function LogOut(){
    console.log('Logging out!')
    cookies.remove('userdata',{ path: '/',sameSite:"strict",secure:true})
    setCredential(undefined)
  }
  if (typeof(credential) =='undefined'){
    return (
      <>
        <Bar OnClickEvent = {Auth}/>
        <NewGenerate isEditorMode={false}/>
      </>
    );
  }
  else
  {
    return (
      <>
        <NavBarLogged OnClickEvent = {LogOut} username = {credential.name}/>
        <EditorContents/>
      </>
    );
  }
  
}
export default App;
