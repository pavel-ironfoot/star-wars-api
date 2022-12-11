import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className = {styles.container}>
        <div className={styles.mainNav}><NavLink to="/" >Home</NavLink></div>
        <div className={styles.mainNav}><NavLink to="/people/?page=1" >People</NavLink></div>
        <div className={styles.mainNav}><NavLink to="/not-found" >Not-Found</NavLink></div>
        </div>
);
}



export default Header;