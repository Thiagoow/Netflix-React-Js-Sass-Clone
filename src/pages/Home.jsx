import React from "react";
import api from "../api";
import HeroSection from "../components/HeroSection";
import SectionRow from "../components/SectionRow";

const Home = () => {
  const [mediaList, setMediaList] = React.useState([]);

  React.useEffect(() => {
    const loadAll = async () => {
      let list = await api.getHomeList();
      //console.log(list);
      setMediaList(list);
    };

    //Executa a função:
    loadAll();
  }, []);

  return (
    <main className="home">
      <HeroSection />

      <section className="list">
        {mediaList.map((item, key) => (
          <SectionRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </main>
  );
};

export default Home;
