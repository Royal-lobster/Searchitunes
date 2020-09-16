import React from "react";
import { connect } from "react-redux";
import SearchResult from "./SearchResult";
import "./SearchResults.css";
import illustration from "../assets/search-illustration.png";
function SearchResults({ results }) {
  return (
    <div className="searchResults">
      {results ? (
        <div className="searchResults__inst">Click a track to Preview</div>
      ) : (
        <p></p>
      )}
      {results?.map((result) => (
        <SearchResult
          key={result.trackId + result.artistId}
          trackArt={result.artworkUrl100}
          trackName={result.trackName}
          artistName={result.artistName}
          trackLink={result.previewUrl}
        />
      ))}
      {!results ? (
        <center>
          <img
            className="searchResults__indicator"
            src={illustration}
            alt="illustration"
          />
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
