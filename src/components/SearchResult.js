import React, { forwardRef } from "react";
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
  transition: all 0.6s ease;
  cursor: pointer;

  &:hover {
    background-color: #222;
    color: #eee;
  }
`;

const Details = styled.div`
  margin-left: 10%;
  font-family: "Lato", sans-serif;
`;

const SearchResult = forwardRef(
  ({ trackArt, trackName, artistName, trackLink }, ref) => {
    return (
      <div className="searchResult" ref={ref}>
        <a href={trackLink} target="_blank" rel="noopener noreferrer">
          <Card>
            <img
              className="searchResult__img"
              src={trackArt}
              alt={`${trackName}`}
            />
            <Details>
              <p className="searchResult__title">
                {trackName?.replace(/^(.{20}[^\s]*).*/, "$1")}
              </p>
              <p className="searchResult__artistName">
                {artistName?.replace(/^(.{20}[^\s]*).*/, "$1")}
              </p>
            </Details>
          </Card>
        </a>
      </div>
    );
  }
);

export default SearchResult;
