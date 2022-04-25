import React from "react";
import api from "../api";

const FeaturedMedia = ({ media }) => {
  let videoPath = "";
  let mediaBg = `https://image.tmdb.org/t/p/original${media.poster_path}`;

  async function loadVideos() {
    let mediaVid = await api.getVideos(media.id);

    /* TODO: Get only trailers:
    mediaVid = mediaVid.results[i].filter((index) => {
      index.type === "Trailer";
    }); */
    //console.log(mediaVid);

    videoPath = mediaVid.results[0].key;
    console.log(videoPath);
  }

  React.useEffect(() => {
    loadVideos();
  }, []);

  return (
    <section
      className="featuredMedia"
      style={{
        backgroundImage: `url(${mediaBg})`
      }}
    >
      <div className="darkGradient">
        <div className="video ">
          <iframe
            width="0"
            height="0"
            src={`https://www.youtube.com/embed/${videoPath}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
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

          <p className="description">{media.overview}</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMedia;
