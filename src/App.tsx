import React from 'react';
import { Header } from './components/Header';
import { Routes, Route } from 'react-router-dom';
import { CharactersListPage } from './pages/CharactersList';
import { CharacterDetailPage } from './pages/CharacterDetail';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<CharactersListPage />} />
          <Route
            path="/character/:characterId"
            element={<CharacterDetailPage />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
