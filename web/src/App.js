import React from 'react';
import GlobalProvider from './contexts/global';
import Main from './Pages/Main';

export default function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Main />
      </div>
    </GlobalProvider>
  );
}
