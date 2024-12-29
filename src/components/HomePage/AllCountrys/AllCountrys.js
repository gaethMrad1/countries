import { useContext } from "react";
import "./AllCountrys.css";
import { GlubalState } from "../../../context/GlubalState";
import { Link } from "react-router-dom";

function AllCountrys() {
  const {countries} = useContext(GlubalState);

  return (
    <div className="all-countrys">
        {countries && countries.map((ele) => {
            return (
                <Link className="country" to={`/detail/${ele.name.common}`}>
                    <img src={ele.flags.png} alt={ele.name.common}/>
                    <div className="info">
                        <h4 className="title">{ele.name.common}</h4>
                        <span>Population: {ele.population}</span>
                        <span>Region: {ele.region}</span>
                        <span>Capital: {ele.capital}</span>
                    </div>
                </Link>
            )
        })}
    </div>
  )
}

export default AllCountrys