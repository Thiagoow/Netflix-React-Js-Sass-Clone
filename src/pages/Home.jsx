import React from "react";
import api from "../api";
import SectionRow from "../components/SectionRow";

export default function Home() {
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
      <h1>This is a test</h1>

      <section className="list">
        {mediaList.map((item, key) => (
          <SectionRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </main>
  );
}
