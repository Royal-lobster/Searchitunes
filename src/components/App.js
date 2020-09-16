import { Layout } from "antd";
import React from "react";
import "./App.css";
import Footer from "./Footer";
import Search from "./Search";
import SearchResults from "./SearchResults";
import themeSwitch from "../assets/half.svg";
function App() {
  return (
    <Layout>
      <img
        src={themeSwitch}
        className="app__themeSwitch"
        alt="switch theme"
        onClick={() => {
          if (document.querySelector("html").getAttribute("theme") == null) {
            document.querySelector("html").setAttribute("theme", "dark-mode");
          } else {
            document.querySelector("html").removeAttribute("theme");
          }
        }}
      />
      <Search />
      <SearchResults />
      <Footer />
    </Layout>
  );
}

export default App;
