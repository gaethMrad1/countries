import BackButton from "../components/DetailPage/BackButton/BackButton"
import CountryDetail from "../components/DetailPage/CountryDetail/CountryDetail"
import "./Detail.css";

function Detail() {
  return (
    <div className="detail">
        <div className="container">
            <BackButton />
            <CountryDetail />
        </div>
    </div>
  )
}

export default Detail