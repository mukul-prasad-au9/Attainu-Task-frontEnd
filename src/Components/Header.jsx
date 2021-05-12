import axios from "axios";
import { useState } from "react";
const base_url = "http://localhost:5000/users";

const Header = () => {
  const [word, setWord] = useState("");
  const [suggestionList, setSuggestionList] = useState(null);
  const ChangeWord = (e) => {
    setWord(e.target.value);
    if (e.target.value) {
      axios
        .get(`${base_url}?Full%20Name_like=${e.target.value}&_limit=10`)
        .then((res) => setSuggestionList(res.data));
    } else if (e.target.value === "") {
      setSuggestionList(null);
    }
  };
  const renderSuggestionList = () => {
    if (suggestionList != null) {
      return suggestionList.map((suggestion, idx) => {
        return (
          <div
            className="text-center"
            style={{
              zIndex: "1",
            }}
            id={suggestion.Id}
            key={idx}
          >
            <a href="/" className="text-center">
              {suggestion["Full Name"]}
            </a>
          </div>
        );
      });
    }
  };
  return (
    <div className="form-inline ml-auto">
      <div className="input-group">
        <input
          type="search"
          className="form-control"
          placeholder="Search by name"
          aria-label="Search"
          aria-describedby="button-addon2"
          value={word}
          onChange={ChangeWord}
        />
        <div className="input-group-append">
          <span
            className="btn btn-outline-light"
            type="button"
            id="button-addon2"
          >
            <i className="fa fa-search" aria-hidden="true"></i>
          </span>
        </div>
      </div>
      <div style={{ position: "absolute" }}>{renderSuggestionList()}</div>
    </div>
  );
};
export default Header;
