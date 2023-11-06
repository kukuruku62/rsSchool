import React, { useState, useEffect, useContext, ChangeEvent } from 'react';
import styles from './MainPage.module.scss';
import { Skeleton } from '../components/Skeleton/Skeleton';
import { SearchContext } from '../App';
import { SingleCard } from '../components/SingleCard/SingleCard';

type FetchResults = {
  id: number;
  name?: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  series: string;
};

export const MainPage = () => {
  const MAIN_API_KEY = 'https://gateway.marvel.com:443/v1/public/characters?';
  const API_KEY = '&apikey=a5e14c8cda54a91db039a9ad0f0e7b0f';
  
  const [fetchData, setFetchData] = useState<FetchResults[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedItemsOnPage, setSelectedItemsOnPage] = useState('5');
  const itemOnPageFromLocalStrg = localStorage.getItem('itemsOnPage') || selectedItemsOnPage;
  const { searchValue } = useContext(SearchContext);
  const searchByName = searchValue ? `name=${searchValue}&` : '';

  const handleChangeItemsOnPage = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedItemsOnPage(e.target.value)
    localStorage.setItem('itemsOnPage', e.target.value)
  }

  useEffect(() => {
    setLoading(true);

    try {
      fetch(`${MAIN_API_KEY}${searchByName}limit=${itemOnPageFromLocalStrg}${API_KEY}`)
        .then((res) => res.json())
        .then((arr) => {
          setFetchData(arr.data.results);
        });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [selectedItemsOnPage, searchValue]);

  return (
    <>
      <form className={styles.form}>
        <label className={styles.label} htmlFor="number-items">number of cards per page: </label>
        <select
          value={itemOnPageFromLocalStrg}
          name="select"
          id="number-items"
          onChange={handleChangeItemsOnPage}
        >
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
      </form>
      {loading ? (
        <Skeleton />
      ) : (
        <>
          <h1 className={styles.mainTitle}>Cards:</h1>
          <div className={styles.container}>
            {fetchData.map((item) => (
              <SingleCard key={item.id} {...item} />
            ))}
          </div>
        </>
      )}
    </>
  );
};
