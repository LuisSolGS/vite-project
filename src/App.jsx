import Header from "./Components/header";
import React, { useState,useEffect } from 'react';
import Entry from "./Components/entry";
import axios from "axios";

export default function App() {
  const [entry, setEntry] = useState('loading');
  let list = [];

  async function getListTopGames(platform = 'all'){
    axios.get('http://127.0.0.1:8000/members/?platform=' + platform)
    .then(function (res) {
      //console.log(res.data);
      for (let i = 0; i < res.data.length; i++){
        list.push({key : res.data[i].id, img : `https://images.igdb.com/igdb/image/upload/t_cover_big/${res.data[i].cover.image_id}.jpg`, title: res.data[i].name, text : res.data[i].summary})
      }
      setEntry(list.map((inst) => {
        return (
            <Entry
                key={inst.id}
                entry={inst}
            />
        )
      }));
      })
      .catch(function (error) {
        console.log(error);
    });
  }

  if (entry == 'loading'){
    getListTopGames()
  }

  return (
        <>
          <Header />
          <header>
            <nav>
                <a href="#" onClick={() => getListTopGames('all')}>all</a>
                <a href="#" onClick={() => getListTopGames('PC')}>PC</a>
                <a href="#" onClick={() => getListTopGames('PlayStation')}>PlayStation</a>
                <a href="#" onClick={() => getListTopGames('Xbox')}>Xbox</a>
                <a href="#" onClick={() => getListTopGames('Switch')}>Nintendo Switch</a>
            </nav>
          </header>
          <main className="container">
              {entry === 'loading' ? <h1>Loading</h1> : entry}
          </main>
        </>
    )  
}