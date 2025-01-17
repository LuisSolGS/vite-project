import Header from "../Components/header";
import Nav from "../Components/nav";
import {useLocation} from 'react-router'
import React, { useState,useEffect } from 'react';
import myData from '../assets/game.json';
import GamePage from "../Components/gamePage";


import axios from "axios";

export default function Game(props) {
    const [entry, setEntry] = useState('loading');
    const location = useLocation();
    const id = location.state.from;
    console.log(id);

    function getGame(id){
        console.log(myData);
        setEntry(
            {
                title : myData.name,
                release_date : myData.first_release_date,
                img : `https://images.igdb.com/igdb/image/upload/t_cover_big/${myData.cover.image_id}.jpg`,
                video : myData.videos[0].video_id,
                genre : myData.genres[0].name,
                platforms : (() => {let concatenatedString = ''; for (let i = 0; i < myData.platforms.length; i++) {concatenatedString += myData.platforms[i].name + ", ";} return concatenatedString;})(),
                summary : myData.summary,
                storyline : myData.storyline
            }
        );
        //setEntry(myData);
    }

    useEffect(()=>{
        //let location = useLocation();
        getGame();
    },[]);
  
    return (
          <>
            <Nav />
            <Header />
{/*             <main>{JSON.stringify(entry)}</main> */}
            <GamePage entry = {entry}/>
          </>
      )  
  }