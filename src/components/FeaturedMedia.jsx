import React from "react";
import api from "../api";

const FeaturedMedia = ({ media }) => {
  async function loadVideos() {
    let mediaVid = await api.getVideos(media.id);
    console.log(mediaVid);
  }

  React.useEffect(() => {
    loadVideos();
  }, []);

  let mediaBg = `https://image.tmdb.org/t/p/original${media.poster_path}`;

  return (
    <section className="featuredMedia">
      <div className="img">
        <img src={mediaBg} alt="poster" />
      </div>

      <div className="details">
        <h2 className="title">{media.title}</h2>

        <div className="secondaryBtns">
          <a className="playBtn" href={`/watch/${media.id}`}>
            ▶ Assistir
          </a>
          <a className="moreBtn" href={`/list/add/${media.id}`}>
            + Mais informações
          </a>
        </div>

        <p className="desc">{media.overview}</p>
      </div>
    </section>
  );
};

export default FeaturedMedia;
