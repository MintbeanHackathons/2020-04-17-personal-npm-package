import React from 'react';
import styles from './List.css';
import { Link } from 'react-router-dom';
import { listData } from '../../data/listData';

const List = () => {
  const listItemElements = listData.map(item => (
    <li key={item.title} className={styles.card}>
      <Link className={styles.Link} to={`/${item.title}`}>
        <h2 className={styles.title}>{item.title}</h2>
        <div className={styles.imgDiv}>
          <img src={item.imageSmall} alt={item.title}/>
        </div>
      </Link>
    </li>
    
  ));

  return (
    <>
      <ul className={styles.List}>
        {listItemElements}
      </ul>
    </>
  );
};

export default List;