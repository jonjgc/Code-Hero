import React from 'react';
import { Header } from './components/Header';
import { CharactersListPage } from './pages/CharactersList';

function App() {
  return (
    <>
      <Header />
      <main>
        <CharactersListPage />
      </main>
    </>
  );
}

export default App;
