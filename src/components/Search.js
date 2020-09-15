import Axios from "axios";
import React from "react";
import { connect } from "react-redux";

import "./Search.css";
function Search({ searchKeyword, setSearchkeyword, setSearchResults }) {
  const uri =
    "https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=";

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.get(`${uri}${searchKeyword}`)
      .then((res) => {
        setSearchResults(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="search">
      <h1 className="search__title">Search itunes</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="search__input"
          type="text"
          placeholder="click to search..."
          onChange={(e) => setSearchkeyword(e.target.value)}
        />
      </form>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    searchKeyword: state.searchKeyword,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setSearchkeyword: (keyword) =>
      dispatch({ type: "SET_KEYWORD", payload: keyword }),
    setSearchResults: (results) => {
      dispatch({ type: "SET_SEARCH_RESULTS", payload: results });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
