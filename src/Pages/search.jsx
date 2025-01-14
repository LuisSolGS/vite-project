import Header from "../Components/header";
import React, { useState,useEffect } from 'react';
import Entry from "../Components/entry";
import Nav from "../Components/nav";
import axios from "axios";

export default function Search() {
    const [entry, setEntry] = useState('loading');
    let list = [];
  
    function search(formData) {
        const query = formData.get("query");
        console.log(`You searched for '${query}'`);
    }

    function searchForAGame(query){
      axios.get('http://127.0.0.1:8000/search/?query=' + query)
      .then(function (res) {
        console.log(`Pulling data for ${query}`);
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
  
    return (
          <>
            <Nav />
            <Header />

            <form action={search} className="searchGameBar">
                <input name="query" type="text" placeholder="Game.."/>
                <button type="submit">Search</button>
            </form>

            <main className="container">
                {entry === 'loading' ? <h1>Search for something</h1> : entry}
            </main>
          </>
      )  
  }