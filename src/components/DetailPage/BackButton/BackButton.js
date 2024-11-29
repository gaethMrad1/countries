import { Link } from "react-router-dom";
import "./BackButton.css";

function BackButton() {
  return (
    <Link to="/countries" className="back">
        <i className="fa-solid fa-arrow-left"></i>
        Back
    </Link>
  )
}

export default BackButton