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

    function fetchOnlyFavorites(item) {
      const favoriteMedias = [61889, 94605, 93405, 114868];
      let yo = [];

      console.log(item);

      for (let i = 0; i < item[0].items.results.length; i++) {
        yo.push(item[0].items.results[i].id);

        item = item.filter((i) => {
          favoriteMedias.includes(yo[i]);
        });
      }

      console.log(item);

      //return item;
    }

    const loadHero = async () => {
      let list = await api.getHomeList();
      let filterBySlug = list.filter((i) => i.slug === "originals");
      let filterMedia = Math.floor(
        //Catches a random array position (-1 because array starts in 0):
        Math.random() * (filterBySlug[0].items.results.length - 1)
      );

      fetchOnlyFavorites(filterBySlug);
      let media = filterBySlug[0].items.results[filterMedia];

      //Catches additional info about the filterMedia:
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
