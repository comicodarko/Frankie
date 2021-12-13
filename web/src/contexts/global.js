import React, { createContext, useState, useEffect } from 'react';
import ws from '../services/ws';

export const GlobalContext = createContext({});

export default function GlobalProvider({ children }) {
  useEffect(() => {
    ws.on('connect', () => {
      console.log('WS Conectado');
    });
    
    // ws.on('newMessage', messageObj => {
    //   setFrankieMessages(oldArray => [...oldArray, messageObj]);
    // });

    return () => {
      ws.removeAllListeners();
    }
    
  }, []);

  return (
    <GlobalContext.Provider value={{
      
    }}>
      {children}
    </GlobalContext.Provider>
  )
}