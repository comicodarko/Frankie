import React, { createContext, useState, useEffect } from 'react';
import ws from '../services/ws';

export const GlobalContext = createContext({});

export default function GlobalProvider({ children }) {
  const [movieGenres, setMovieGenres] = useState([]);
  const [linkTypes, setLinkTypes] = useState([]);
  const [todoTypes, setTodoTypes] = useState([]);

  useEffect(() => {
    ws.on('connect', () => {
      console.log('WS Conectado');
    });
    
    ws.on('information', info => {
      if(info.type === 'movieGenres') {
        setMovieGenres([{}, ...info.content]);
      } else if(info.type === 'linkTypes') {
        setLinkTypes([{}, ...info.content]);
      } else if(info.type === 'todoTypes') {
        setTodoTypes([{}, ...info.content]);
      } else {
        console.log(info);
      }
    })

    // ws.on('newMessage', messageObj => {
    //   setFrankieMessages(oldArray => [...oldArray, messageObj]);
    // });

    return () => {
      ws.removeAllListeners();
    }
  }, []);

  return (
    <GlobalContext.Provider value={{
      movieGenres, linkTypes, todoTypes
    }}>
      {children}
    </GlobalContext.Provider>
  )
}