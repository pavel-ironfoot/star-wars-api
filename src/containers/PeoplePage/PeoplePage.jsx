import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import PeopleList from '../../components/PeoplePage/PeopleList';
import PeopleNavigation from './PeopleNavigation';
import { changeHTTP, getApiResource } from '../../utils/network';
import { getPeopleId, getPeopleImage, getPeoplePageId } from '../../services/getPeopleData';
import { API_PEOPLE } from '../../constants/api';
import { useQueryParams } from '../../hooks/useQueryParams';

import styles from './PeoplePage.module.css';


const PeoplePage = ({ setErrorApi }) => {
    const [people, setPeople] = useState(null);
    const [previousPage,setPreviousPage] = useState(null);
    const [nextPage,setNextPage] = useState(null);
    const [counterPage,setCounterPage] = useState(1);

    const query = useQueryParams();
    const queryPage = query.get('page');
    // console.log(query);
    // console.log(queryPage);
    // console.log(previousPage,nextPage);

    const getResource = async (url) => {
        const res = await getApiResource(url);
        console.log(res);
        if (res) {
            const peopleList = res.results.map((elem) => {
                const id = getPeopleId(elem.url);
                const img = getPeopleImage(id);
                return {
                    id: id,
                    name: elem.name,
                    img: img,
                }
            })

            setPeople(peopleList);
            setPreviousPage(changeHTTP(res.previous));
            setNextPage(changeHTTP(res.next));
            setCounterPage(getPeoplePageId(url));
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }

    }

    useEffect(() => {
        getResource(API_PEOPLE + queryPage);
    }, [queryPage]);

    return (
        <div>
            <PeopleNavigation
                getResource={getResource}
                previousPage={previousPage}
                nextPage={nextPage}
                counterPage={counterPage}
            />
            {people && <PeopleList people={people} />}
        </div>
    );

}
PeoplePage.propTypes ={
    setErrorApi: PropTypes.func,
}
export default withErrorApi(PeoplePage);

