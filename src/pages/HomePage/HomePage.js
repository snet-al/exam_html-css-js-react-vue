import React, { useState, useEffect } from "react";
import Main from "../../components/Main/Main";
import Layout from "../../layout/Layout";
import { photoServices } from "../../services/PhotoServices";

const getRandomItems = (data, count) => {
  const shuffled = data.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
function HomePage() {
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await photoServices();
      const randomItems = getRandomItems(data, 4);
      setAuthors(randomItems);
    };

    fetchData();
  }, []);
  return (
    <Layout>
      <Main authors={authors} />
    </Layout>
  );
}

export default HomePage;
