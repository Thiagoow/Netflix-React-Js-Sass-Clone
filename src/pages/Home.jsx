import React from "react";
import api from "../api";
import HeroSection from "../components/HeroSection";
import SectionRow from "../components/SectionRow";
import Header from "../components/Header";
import FeaturedMedia from "../components/FeaturedMedia";

export default function Home() {
  const [mediaList, setMediaList] = React.useState([]);
  const [HeroData, setHeroData] = React.useState(null);
  const [FeaturedData, setFeaturedData] = React.useState(null);

  async function loadSections() {
    let list = await api.getHomeList();
    //console.log(list);
    setMediaList(list);
  }

  async function loadHero() {
    let list = await api.getHomeList();
    setMediaList(list);

    const favoriteMedias = [
      61889, 94605, 93405, 114868, 77169, 66732, 103786, 71912, 890, 67178,
      76874, 106292
    ];
    let medias = [];

    for (let i = 0; i < favoriteMedias.length; i++) {
      list = await api.getMediaInfo(favoriteMedias[i], "tv");
      medias.push(list);
    }
    let randomMedia = Math.floor(Math.random() * (medias.length - 1));

    list = medias[randomMedia];
    //console.log(list);
    setHeroData(list);
  }

  async function loadFeatured() {
    let list = await api.getHomeList();
    let filterBySlug = list.filter((i) => i.slug === "history");
    /* */
    let filterMedia = Math.floor(
      //Catches a random array position (-1 because array starts in 0):
      Math.random() * (filterBySlug[0].items.results.length - 1)
    );
    let media = filterBySlug[0].items.results[filterMedia];
    //Catches additional info about the filterMedia:
    let featured = await api.getMediaInfo(media.id, "movie");

    //console.log(featured);
    setFeaturedData(featured);
  }

  //==== Executa as funções:
  React.useEffect(() => {
    loadHero();
    loadSections();
    loadFeatured();
  }, []);

  return (
    <>
      <Header />

      <main className="home container">
        {HeroData && <HeroSection media={HeroData} />}

        <section className="list">
          {mediaList.map((item, key) => (
            <SectionRow key={key} title={item.title} items={item.items} />
          ))}
        </section>
      </main>

      {FeaturedData && <FeaturedMedia media={FeaturedData} />}
    </>
  );
}
