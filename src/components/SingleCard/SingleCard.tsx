import React from 'react';
import styles from './SingleCard.module.scss';

interface FetchResults {
  name?: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  series: string;
}

// interface SingleCardProps {
//   fetchData: FetchResults;
// }

export const SingleCard = ({
  name,
  description,
  thumbnail,
  series,
}: FetchResults) => {
  // console.log(thumbnail);
  return (
    <article className={styles.singleCardContainer}>
      <img className={styles.imgCard} src={`${thumbnail.path}.${thumbnail.extension}`} alt={`Picture of ${name}`} />
      <h3 className={styles.titleCard}>Name: {name}</h3>
      <p className={styles.descCard}>
        Description: {description.length > 0 ? description : 'no description'}
      </p>
      <p>{}</p>
      
    </article>
  );
};
