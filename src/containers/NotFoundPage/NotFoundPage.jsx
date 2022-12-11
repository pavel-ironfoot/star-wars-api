import styles from './NotFoundPage.module.css';
import notFound from './img/errorGit.png';
import React from 'react';
import { useLocation } from 'react-router';

const NotFoundPage = () => {
    let location = useLocation();

    return (
        <div>
            <figure>
                <img className={styles.img} src={notFound} alt="Not Found 404" />
                <figcaption className={styles.text}>No match for<strong>{location.pathname}</strong></figcaption>
            </figure>
        </div>
);
}


export default NotFoundPage;