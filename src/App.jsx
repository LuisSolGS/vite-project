import Header from "./Components/header"
import React, { useState,useEffect } from 'react';
import Entry from "./Components/entry"

//  const APIKey = cafdf83d19da45adbe69bf721229b97e


// Define the API URL
//const apiUrl = 'https://api.rawg.io/api/games?key=${APIKey}&dates=2019-09-01,2019-09-30&platforms=18,1,7';

// Make a GET request
function mod(n, m) {
  return ((n % m) + m) % m;
}

async function getData() {
  const APIKey = "cafdf83d19da45adbe69bf721229b97e";
  var currentdate = new Date();
  
  const today = `${currentdate.getFullYear()}-${currentdate.getMonth()<9?"0":""}${currentdate.getMonth()+1}-${currentdate.getDay()<9?"0":""}${currentdate.getDate()}`
  const lastMonth = mod(currentdate.getMonth()-1,13)
  const last = `${lastMonth==12?currentdate.getFullYear()-1:currentdate.getFullYear()}-${lastMonth<9?"0":""}${lastMonth}-${currentdate.getDay()<9?"0":""}${currentdate.getDate()}`

  const apiUrl = `https://api.rawg.io/api/games?key=${APIKey}&dates=${last},${today}&platforms=18,1,7`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    //console.log(json);
    return json;
  } catch (error) {
    console.error(error.message);
  }
}

export default function App() {
  const [error, setError] = useState(false);
  const [state, setState] = useState('');
  const [entry, setEntry] = useState('');
  var list = [];
/*     const entryElements = data.map((entry) => {
        return (
            <Entry
                key={entry.id}
                entry={entry}
            />
        )
    })
     */
/*     const APIKey = "cafdf83d19da45adbe69bf721229b97e";
    var currentdate = new Date();
    
    const today = `${currentdate.getFullYear()}-${currentdate.getMonth()<9?"0":""}${currentdate.getMonth()+1}-${currentdate.getDay()<9?"0":""}${currentdate.getDate()}`
    const lastMonth = mod(currentdate.getMonth()-1,13)
    const last = `${lastMonth==12?currentdate.getFullYear()-1:currentdate.getFullYear()}-${lastMonth<9?"0":""}${lastMonth}-${currentdate.getDay()<9?"0":""}${currentdate.getDate()}`

    const apiUrl = `https://api.rawg.io/api/games?key=${APIKey}&dates=${last},${today}&platforms=18,1,7`;
    var entry;

    console.log(apiUrl);

    fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    }); */

    const APIKey = "cafdf83d19da45adbe69bf721229b97e";
    var currentdate = new Date();
    
    const today = `${currentdate.getFullYear()}-${currentdate.getMonth()<9?"0":""}${currentdate.getMonth()+1}-${currentdate.getDay()<9?"0":""}${currentdate.getDate()}`
    const lastMonth = mod(currentdate.getMonth()-1,13)
    const last = `${lastMonth==12?currentdate.getFullYear()-1:currentdate.getFullYear()}-${lastMonth<9?"0":""}${lastMonth}-${currentdate.getDay()<9?"0":""}${currentdate.getDate()}`

    const apiUrl = `https://api.rawg.io/api/games?key=${APIKey}&dates=${last},${today}&platforms=18,1,7`;
    /* var entry = value.results[0];
      entry = {key : entry.id, img : entry.background_image, title: entry.name, text : ""};

      console.log(entry); */

    useEffect(() => {
        setState('loading');
        fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log(data);
          setState('success');
          //setEntry({key : data.results[0].id, img : data.results[0].background_image, title: data.results[0].name, text : ""});
          for (let i = 0; i < data.count; i++){
            list.push({key : data.results[i].id, img : data.results[i].background_image, title: data.results[i].name, text : ""})
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
        .catch(error => {
          console.error('Error:', err);
                setState('error');
                setError(err);
        });
      }, []);
/*             .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.error('Error:', err);
                setState('error');
                setError(err);
            });
    }, []); */
    if (state === 'error')
        return (
            <h1>
                {error.toString()}
            </h1>
        );
      return (
          <>
              {state === 'loading' ? (
                    <>
                    <Header />
                    <h1>Loading...</h1>
                    </>
                ) : (
                    <>
                      <Header />
                      <main className="container">
                          {entry}
                      </main>
                    </>
                )}
          </>
      )  
}