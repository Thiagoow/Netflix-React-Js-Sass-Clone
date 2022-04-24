import React from "react";
import api from "../api";
import HeroSection from "../components/HeroSection";
import SectionRow from "../components/SectionRow";

const Home = () => {
  const [mediaList, setMediaList] = React.useState([]);
  const [HeroData, setHeroData] = React.useState(null);

  async function loadSections() {
    let list = await api.getHomeList();
    console.log(list);
    setMediaList(list);
  }

  async function loadFavoriteHero(item) {
    const favoriteMedias = [
      61889, 94605, 93405, 114868, 77169, 66732, 103786, 71912, 890
    ];
    let medias = [];

    for (let i = 0; i < favoriteMedias.length; i++) {
      item = await api.getMediaInfo(favoriteMedias[i], "tv");
      medias.push(item);
    }
    let randomMedia = Math.floor(Math.random() * (medias.length - 1));

    item = medias[randomMedia];
    //console.log(item);
    return item;
  }
  async function loadHero() {
    let list = await api.getHomeList();
    let filterBySlug = list.filter((i) => i.slug === "originals");
    /* 
    let filterMedia = Math.floor(
      //Catches a random array position (-1 because array starts in 0):
      Math.random() * (filterBySlug[0].items.results.length - 1)
    );
    let media = filterBySlug[0].items.results[filterMedia];
    //Catches additional info about the filterMedia:
    let hero = await api.getMediaInfo(media.id, "tv");*/

    /*Fetching only favoriteMedias: */
    let hero = await loadFavoriteHero(filterBySlug);

    setHeroData(hero);
  }

  //==== Executa as funções:
  React.useEffect(() => {
    loadSections();
    loadHero();
  }, []);

  return (
    <main className="home container">
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
