import HomePage from '../containers/HomePage/index';
import PeoplePage from '../containers/PeoplePage/index';
import NotFoundPage from '../containers/NotFoundPage/index';

const routesConfig = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/people',
        component: PeoplePage,
    },
    {
        path: '*',
        component: NotFoundPage,
    },
    {
        path: '/not-found',
        component: NotFoundPage,
    },
    
];

export default routesConfig;