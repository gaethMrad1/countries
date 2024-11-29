import { useContext } from "react";
import "./Filter.css";
import { GlubalState } from "../../../../context/GlubalState";

function Filter() {
  const {setCountries} = useContext(GlubalState);

  const filter = (e) => {
    if (e.target.value === "All") {
      fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => setCountries(data))
    } else {
      fetch(`https://restcountries.com/v3.1/region/${e.target.value.toLowerCase()}`)
    .then(response => response.json())
    .then(data => setCountries(data))
    }
  }

  return (
      <select className="filter" onChange={filter}>
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
      </select>
  )
}

export default Filter