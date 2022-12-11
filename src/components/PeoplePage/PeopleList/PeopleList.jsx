import PropTypes from 'prop-types';

import styles from './PeopleList.module.css';

const PeopleList = ({ people }) => {
    return (
        <ul className={styles.list_container}>
            {people.map((elem) => {
                return <li className={styles.list_item} key={elem.id}>
                    <a href=''>
                        <img className={styles.person_photo} src={elem.img} alt={elem.name} />
                        <p>{elem.name}</p>
                    </a>
                </li>
            })}
        </ul>
    );

}
PeopleList.propTypes ={
    people: PropTypes.array,
}

export default PeopleList;