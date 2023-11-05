import React, { useContext, useState } from 'react';
import { Layout } from './components/Layout/Layout';
import { MainPage } from './pages/MainPage';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';


interface SearchContextValue {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchContext = React.createContext<SearchContextValue>({
  searchValue: '',
  setSearchValue: () => {},
});

// console.log(searchContext)

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <Header/>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Layout>
    </SearchContext.Provider>
  );
}

export default App;
