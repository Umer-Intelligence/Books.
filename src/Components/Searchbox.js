import "./Search.css";
import { useState } from "react";
import axios from "axios";
import Buttons from "./Searchbutton.js";
import Dropdown from "./Dropdown.js";

const Searchbox = ({ maxResults }) => {
  const [result, setResult] = useState([]);
  const [book, setBook] = useState("");
  const [APIKey, setAPIKey] = useState(
    "AIzaSyBXv6hdNTx4jg3UUCI_zJR7b_X_6DGRrvo"
  );
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          book +
          "&key=" +
          APIKey +
          `&maxResults=${maxResults ? maxResults : 10}`
      )
      .then((data) => {
        console.log(data.data.items);
        setResult(data.data.items);
      });
  };
  const handleChange = (event) => {
    const book = event.target.value;
    setBook(book);
  };
  return (
    <>
      <div className="Book-Search">
        <input
          autoComplete="off"
          onChange={handleChange}
          type="text"
          placeholder="Search Books"
        />
      </div>
      <div>
        <button className="Search-button" onClick={handleSubmit}>
          Go !
        </button>
      </div>
      <div className="Result-container">
        {result.map((book) => (
          <div className="Result-item">
            <a href={book.volumeInfo.previewLink} target=".blank">
              <div className="Img-container">
                <img
                  src={book?.volumeInfo?.imageLinks?.thumbnail}
                  alt={book.title}
                />
                <button className="Box-pop">Check out !</button>
              </div>
              <button className="thumbnail-button">
                {book?.volumeInfo?.title}
              </button>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};
export default Searchbox;
