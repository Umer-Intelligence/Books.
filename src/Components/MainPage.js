import "./Books.css";
import Text from "./Text.js";
import BookHeading from "./BookHeading.js";
import { Link } from "react-router-dom";
export default function App() {
  return (
    <>
      <div>
        <BookHeading />
        <Text />
      </div>
      <div>
        <Link to="/Book">
          <button className="Book-button">Explore!</button>
        </Link>
      </div>
    </>
  );
}
