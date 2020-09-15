import React from "react";
import { connect } from "react-redux";
import SearchResult from "./SearchResult";
import "./SearchResults.css";
import illustration from "../assets/search-illustration.png";
function SearchResults({ results }) {
  return (
    <div className="searchResults">
      {results?.map((result) => (
        <SearchResult
          key={result.trackId + result.artistId}
          trackArt={result.artworkUrl100}
          trackName={result.trackName}
          artistName={result.artistName}
        />
      ))}
      {!results ? (
        <center>
          <img className="searchResults__indicator" src={illustration} />
        </center>
      ) : (
        <p></p>
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    results: state.results,
  };
};
export default connect(mapStateToProps)(SearchResults);
