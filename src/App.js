import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home';
import { useEffect, useState } from 'react';
import { GlubalState } from './context/GlubalState';
import Detail from './pages/Detail';

function App() {
  const [countries, setCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
      setCountries(data)
      setAllCountries(data)
    })
  }, [])

  const values = {countries, setCountries, allCountries}

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <GlubalState.Provider value={values}>
          <Routes>
            <Route path='/countries' element={<Home />}/>
            <Route path='/detail/:countryName' element={<Detail />}/>
          </Routes>
        </GlubalState.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
