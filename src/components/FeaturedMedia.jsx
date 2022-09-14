import React from "react";
import api from "../utils/api";

const FeaturedMedia = ({ media }) => {
  const [VideoPath, setVideoPath] = React.useState(null);
  let mediaBg = `https://image.tmdb.org/t/p/original${media.poster_path}`;

  async function loadVideos() {
    let mediaVid = await api.getVideos(media.id);
    //console.log(mediaVid);

    /* TODO: Get only trailers:*/
    let trailers = mediaVid.results.filter((i) => {
      i.type === "Trailer";
    });

    let path = mediaVid.results[0].key;
    //console.log(path);
    setVideoPath(path);
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
            src={`https://www.youtube.com/embed/${VideoPath}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="details">
          <h2 className="title">{media.title}</h2>

          <div className="secondaryBtns">
            <a
              className="moreBtn"
              href={`/list/add/${media.id}`}
              target="_blank"
            >
              + Mais informações
            </a>
            <a className="playBtn" href={media.homepage} target="_blank">
              ▶ Assistir
            </a>
          </div>

          <p className="description">{media.overview}</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMedia;
