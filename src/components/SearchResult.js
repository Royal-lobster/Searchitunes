import React from "react";
import styled from "styled-components";
import "./SearchResult.css";
const Card = styled.div`
  background-color: #fff;
  overflow: hidden;
  display: flex;
  align-items: center;
  margin: 10px auto 0 auto;
  border-radius: 10px;
  max-width: 500px;
  padding: 8px;
`;

const Details = styled.div`
  margin-left: 10%;
  font-family: "Lato", sans-serif;
`;

function SearchResult({ trackArt, trackName, artistName }) {
  return (
    <div className="searchResult">
      <Card>
        <img
          className="searchResult__img"
          src={trackArt}
          alt={`${trackName}`}
        />
        <Details>
          <h3 className="searchResult__title">{trackName}</h3>
          <p className="searchResult__artistName">{artistName}</p>
        </Details>
      </Card>
    </div>
  );
}

export default SearchResult;
