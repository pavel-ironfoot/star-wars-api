import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './PeopleNavigation.module.css';

const PeopleNavigation = ({
    getResource,
    previousPage,
    nextPage,
    counterPage,
}) => {

    const handleChangeNext = () => getResource(nextPage);
    const handleChangePrev = () => getResource(previousPage);
    return (
        <div>       
            <NavLink className={styles.link} to={`/people/?page=${counterPage-1}`}>
                <button disabled={!previousPage} onClick={handleChangePrev} className={styles.buttons}>Previous</button>
            </NavLink>
            <NavLink className={styles.link} to={`/people/?page=${counterPage+1}`}>
                <button disabled={!nextPage} onClick={handleChangeNext} className={styles.buttons}>Next</button>
            </NavLink>
        </div>
);
}

PeopleNavigation.propTypes ={
    getResource: PropTypes.func,
    previousPage: PropTypes.string,
    nextPage: PropTypes.string,
    counterPage: PropTypes.number,
};

export default PeopleNavigation;