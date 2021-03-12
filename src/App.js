import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
//import { Card, CardContent, Typography } from '@material-ui/core';



function App() {
  const getPoke =()=>{
    const url=`https://pokeapi.co/api/v2/pokemon`;

    return fetch(url)
    .then((response)=>response.json())
    .catch((error) => console.log("Error : ", error));

};

const getmore = (uurl)=>{
  const url={uurl};

  return fetch(url)
  .then((response)=>response.json())
  .catch((error) => console.log("Error : ", error));

};



const MyCard = ({ pok }) => {
  
  const moreDetails=(url)=>{
    getmore(url)
    .then((data)=> console.log("Poke Data",data))
    .catch((error)=>console.log(error));
  }
  
  const getCard = () =>{

  return (

<h2 onClick={()=>{
  moreDetails(pok.url)
}} style={{color: "orange"}}>{pok.name}</h2>

  );
  };
  return getCard();
};

//---------------------------------------------------------------------------------------

const [poke, setPoke] = useState([]);

//setPoke(data.results)
useEffect(()=>{
  getPoke()
  .then((data) => setPoke(data.results))
  .catch((error) => alert("NOT loading data"));
}
,[]);

  return (
    <div className="App">
     <h1 style={{color: "blue"}}>POKEDEX APPLICATION</h1>
     <h2 style={{color: "red"}}>List of Poke Names is :</h2>
     <h3>Click on Names to get more detail</h3>
     <h4>Details are shown in console.</h4>
    {
     poke.map((pok)=>(
       
       <MyCard pok={pok} />
     ))
   };
     
    </div>
  );
}

export default App;
