import SearchBar from '../components/SearchBar.tsx';
import {useEffect, useReducer, useState} from 'react';
import {api} from '../api.tsx';
import List from '../components/List.tsx';
import {reducer} from '../reducer.tsx';
import axios from 'axios';
import {ACTIONS} from '../actions/types.tsx';
import useDebounce from '../hooks/useDebounce.tsx';
import StarWarsLogo from '../assets/star-wars-logo.svg';
import Loader from '../assets/loader.svg';
import '../App.scss';

const SearchPage = () => {
    const [items, dispatch] = useReducer(reducer, null);
    const [categories, setCategories] = useState([]);
    const [endpoints, setEndpoints] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [loading, setLoading] = useState(false);
    const debouncedSearchedValue = useDebounce(searchValue, 600);


    useEffect(() => {
        api.fetchCategories()
            .then(response => {
                const categoriesData = response;
                setCategories(Object.keys(categoriesData))
                setEndpoints(Object.values(categoriesData))
                })

    }, []);

    useEffect(() => {
        axios.all(endpoints.map((endpoint) => axios.get( `${endpoint}?search=${debouncedSearchedValue}`)))
            .then((response) => {
                const resultObj = {};
                response.forEach((data, index) => {
                    const lightResults = data.data.results.slice(0,3);
                    resultObj[[categories[index]]] = lightResults;
                });
                dispatch({
                    type: ACTIONS.FETCH_DATA,
                    payload: {
                        ...resultObj
                    }
                })
                setLoading(false)
            })
            .catch((error) => {
                console.log('Failed to load data', error)
            })
        setLoading(false)
    }, [debouncedSearchedValue]);

    const filteredListByCategories = categories?.filter(category => items[category]?.length > 0);

    return (<div>
        <div><img src={`${StarWarsLogo}`} alt="Star wars Logo"/></div>
        <SearchBar setSearchValue={setSearchValue} dispatch={dispatch} setLoading={setLoading}/>
        {!loading ? <List filteredListByCategories={filteredListByCategories} items={items}/> :
            <img className="loader" src={`${Loader}`} alt="loading"/>}
    </div>)
}

export default SearchPage