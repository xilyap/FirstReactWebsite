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
const [name, setName] = useState(null);
const [pass, setPass] = useState(false);
  const cookies = new Cookies();
  function Auth(login, password){

      var item ={
        name:login,
        pass:password
      };
      //cookies.set('myCat', item, { path: '/',sameSite:"strict",secure:true});
      //console.log(cookies.get('myCat'));
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item) // body data type must match "Content-Type" header
    };
      fetch('/auth', requestOptions)
        .then(response => response.json())
        .then(data => 
        {
          setName(data.name);
          setPass(data.pass);
          console.log(data);
          cookies.set('userdata',data, { path: '/',sameSite:"strict",secure:true})
          window.location.reload();
        });
  }
  
  function LogOut(){
    console.log('Logging out!')
    cookies.remove('userdata',{ path: '/',sameSite:"strict",secure:true})
    window.location.reload();
  }
  const credential = cookies.get('userdata',{ path: '/',sameSite:"strict",secure:true})
  console.log(credential);
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
