import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home';
import { useEffect, useState } from 'react';
import { GlubalState } from './context/GlubalState';
import Detail from './pages/Detail';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/countries",
    element: <Home />,  // المسار الرئيسي
  },
  {
    path: "/detail/:countryName",
    element: <Detail />,
  },
]);

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
      <GlubalState.Provider value={values}>
        <RouterProvider router={router}/>
      </GlubalState.Provider>
    </div>
  );
}

export default App;
