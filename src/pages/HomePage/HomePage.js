import React, { useState, useEffect } from "react";
import Main from "../../components/Main/Main";
import Layout from "../../layout/Layout";
import { fetchItems } from "../../services/PhotoServices";

const getRandomItems = (data, count) => {
  const shuffled = data.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
function HomePage() {
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await fetchItems();
      const randomItems = getRandomItems(data, 4);
      setAuthors(randomItems);
    })();
  }, []);
  return (
    <Layout>
      <Main authors={authors} />
    </Layout>
  );
}

export default HomePage;
