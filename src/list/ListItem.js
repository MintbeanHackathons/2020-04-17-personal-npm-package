import React from 'react';
import styles from './PortfolioItem.css';
import PropTypes from 'prop-types';
import { useList } from '../../hooks/list';
import { Link } from 'react-router-dom';

const ListItem = ({ match }) => {
  const { title, image, description } = useList(match.params.title);

  return (
    <div className={styles.ListItem}>
      <h2 className={styles.title}>{title}</h2>
      <img src={image} alt={title} />
      <p className={styles.description}>{description}</p>
      <Link className={styles.Link} to={'/'}>Back</Link>
    </div>
  );
};

ListItem.propTypes = { 
  match: PropTypes.shape({
    params: PropTypes.shape({
      title: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default ListItem;
