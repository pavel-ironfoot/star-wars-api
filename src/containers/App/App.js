import PeoplePage from '../PeoplePage/index';
import HomePage from '../HomePage/index';
import routesConfig from '../../routes/routeConfig';
import Header from '../../components/Header/Header';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import styles from './App.module.css';


const App = () => {

  const appRoutes = routesConfig.map((elem,index)=><Route key={index} path={elem.path}  element={<elem.component/>} />)

  return (
    <BrowserRouter>
    <div className={styles.AppWrapper}>
      <Header />
      <Routes>
        {appRoutes} 
      </Routes> 
    </div>
    </BrowserRouter>
  );
}

export default App;

