import React from 'react';
import styles from './PortfolioItem.css';
import PropTypes from 'prop-types';
import { useList } from '../../hooks/list';
import { Link } from 'react-router-dom';

const PortfolioItem = ({ match }) => {
  const { title, image, description, script } = usePortfolio(match.params.title);

  return (
    <div className={styles.PortfolioItem}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.links}>
        <a href={script} target='_blank' rel='noopener noreferrer' >Code</a>
      </div>
      <img src={image} alt={title} />
      <p className={styles.description}>{description}</p>
      <Link className={styles.Link} to={'/'}>Back</Link>
    </div>
  );
};

PortfolioItem.propTypes = { 
  match: PropTypes.shape({
    params: PropTypes.shape({
      title: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default PortfolioItem;
