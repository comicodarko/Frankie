import React, { createContext, useState, useEffect } from 'react';
import ws from '../services/ws';

export const GlobalContext = createContext({});

export default function GlobalProvider({ children }) {
  const [movieGenres, setMovieGenres] = useState([]);

  useEffect(() => {
    ws.on('connect', () => {
      console.log('WS Conectado');
    });
    
    ws.on('information', info => {
      if(info.type === 'movieGenres') {
        setMovieGenres(info.content);
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
      movieGenres
    }}>
      {children}
    </GlobalContext.Provider>
  )
}