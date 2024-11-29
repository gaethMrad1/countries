import Filter from "./Filter/Filter";
import Search from "./Search/Search";
import "./SearchAndFilter.css";

function SearchAndFilter() {
  return (
    <div className="search-and-filter">
        <Search />
        <Filter />
    </div>
  )
}

export default SearchAndFilter