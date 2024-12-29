import { useParams } from "react-router-dom";
import "./CountryDetail.css";
import { useContext, useEffect, useState } from "react";
import { GlubalState } from "../../../context/GlubalState";

function CountryDetail() {
  const {countryName} = useParams();
  const {allCountries} = useContext(GlubalState);
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const countryDetail = allCountries.filter((country) => {
        return country.name.common === countryName
    })
    setCountry(countryDetail);
  }, [allCountries, countryName])

  console.log(country)

  return (
    <div className="country-detail">
        {country && country.map(coun => {
            return (
                <>
                    <img src={coun.flags?.png} alt={coun.name?.common}/>
                    <div className="info">
                        <h1 className="title">{coun.name?.common}</h1>
                        <div>
                            <div>
                                <span>Native Name: {coun.name?.nativeName?.eng?.common}</span>
                                <span>Population: {coun.population}</span>
                                <span>Region: {coun.region}</span>
                                <span>Capital: {coun.capital}</span>
                            </div>
                            <div>
                                <span>Continents: {coun.continents}</span>
                                <span>Area: {coun.area}</span>
                            </div>
                        </div>
                    </div>
                </>
            )
        })}
    </div>
  )
}

export default CountryDetail