import {ACTIONS} from '../actions/types.tsx';
import './SearchBar.scss';
import Search from '../assets/search.svg';

const SearchBar = ({ setSearchValue, dispatch, setLoading }) => {
  const handleInputChange = (event) => {
    if (event.target.value !== "") {
      setLoading(true)
      const currentSearchTerm = event.target.value;
      setSearchValue(currentSearchTerm);
    } else {
      setLoading(false)
      setSearchValue(null);
      dispatch({
        type: ACTIONS.RESET
      })
    }
  }

  return (
      <div className="search-container">
        <input
            onChange={e => handleInputChange(e)}
            placeholder="Search..."
            id="search"
            className="search"
            type="text"
        />
        <img className="search-icon" src={`${Search}`} alt="Search"/>
      </div>
  )
}

export default SearchBar;