import React from "react";
import api from "../api";
import HeroSection from "../components/HeroSection";
import SectionRow from "../components/SectionRow";

const Home = () => {
  const [mediaList, setMediaList] = React.useState([]);
  const [HeroData, setHeroData] = React.useState(null);

  React.useEffect(() => {
    const loadSections = async () => {
      let list = await api.getHomeList();
      //console.log(list);
      setMediaList(list);
    };

    const loadHero = async () => {
      let list = await api.getHomeList();
      let filtered = list.filter((i) => i.slug === "topRated");
      let randomMedia = Math.floor(
        //Catches a random array position (-1 because array starts in 0):
        Math.random() * (filtered[0].items.results.length - 1)
      );
      let media = filtered[0].items.results[randomMedia];

      //Catches additional info about the randomMedia:
      let hero = await api.getMediaInfo(media.id, "tv");
      //console.log(hero);
      setHeroData(hero);
    };

    //Executa as funções:
    loadSections();
    loadHero();
  }, []);

  return (
    <main className="home">
      {HeroData && <HeroSection media={HeroData} />}

      <section className="list">
        {mediaList.map((item, key) => (
          <SectionRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </main>
  );
};

export default Home;
