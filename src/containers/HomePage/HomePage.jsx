import styles from './HomePage.module.css';
import MainThemes from './MainThemes/MainThemes';

const HomePage = () => {
    return (
        <div>
            <h1 className='header__text'>Home Page</h1>
            <MainThemes />
        </div>
    );
}




export default HomePage;