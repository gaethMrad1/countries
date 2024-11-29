import AllCountrys from "../components/HomePage/AllCountrys/AllCountrys"
import SearchAndFilter from "../components/HomePage/SearchAndFilter/SearchAndFilter"
import "./Home.css";

function Home() {
  return (
    <div className="home">
        <div className="container">
            <SearchAndFilter />
            <AllCountrys />
        </div>
    </div>
  )
}

export default Home