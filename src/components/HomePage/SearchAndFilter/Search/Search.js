import { useContext } from "react";
import "./Search.css";
import { GlubalState } from "../../../../context/GlubalState";

function Search() {
  const {setCountries, allCountries} = useContext(GlubalState);

  const searchCountry = (e) => {
    const filtered = allCountries.filter((country) => {
      return country.name.common.includes(e.target.value)
    })
    setCountries(filtered);
  }

  return (
    <form className="search">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input onChange={searchCountry} type="search" placeholder="Search for a country..."/>
    </form>
  )
}

export default Search