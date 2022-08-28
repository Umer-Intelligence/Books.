import "./Books.css";
import React, { useState } from "react";
import Dropdown from "./Dropdown.js";
import Searchbox from "./Searchbox.js";
import Text from "./Text.js";
import { Link } from "react-router-dom";
const SearchPage = () => {
  const [max, setMax] = useState(undefined);
  return (
    <div>
      <div>
        <Link to="/">
          <button className="Back-button">Back to home</button>
        </Link>
      </div>
      <div>
        <Text />
      </div>
      <div>
        <div>
          <Dropdown value={max} onChange={setMax} />.
        </div>
        <div>
          <Searchbox maxResults={max} />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
