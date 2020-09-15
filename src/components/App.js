import { Layout } from "antd";
import React from "react";
import Footer from "./Footer";
import Search from "./Search";
import SearchResults from "./SearchResults";

function App() {
  return (
    <Layout>
      <Search />
      <SearchResults />
      <Footer />
    </Layout>
  );
}

export default App;
