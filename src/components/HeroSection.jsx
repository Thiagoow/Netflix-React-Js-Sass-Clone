import React from "react";

export default function HeroSection({ media }) {
  let mediaBg = `https://image.tmdb.org/t/p/original${media.poster_path}`;
  let mediaYear = new Date(media.first_air_date).getFullYear();
  let genres = [];

  for (let i = 0; i < media.genres.length; i++) {
    //console.log(media.genres[i]);
    genres.push(media.genres[i].name);
  }

  return (
    <section
      className="heroSection"
      style={{
        backgroundImage: `url(${mediaBg})`
      }}
    >
      <div className="rightGradient ">
        <div className="mediaContent">
          <div className="info container">
            <h1 className="title">{media.name}</h1>

            <b className="row">
              <p className="points">{media.vote_average} pontos</p>
              <p className="year">{mediaYear}</p>
              <p className="seasons">
                {media.number_of_seasons} temporada
                {/*👇🏽 If it's plural add 's', if not add nothing */}
                {media.number_of_seasons !== 1 ? "s" : ""}
              </p>
            </b>

            <p className="desc">{media.overview}</p>

            <div className="btns">
              <a className="primaryBtn" href={media.homepage} target="_blank">
                ▶ Assistir
              </a>
              <a
                className="moreBtn"
                href={`/list/add/${media.id}`}
                target="_blank"
              >
                + Mais informações
              </a>
            </div>

            {genres.length >= 1 && (
              <p className="genres">
                <b>Gênero{genres.length !== 1 ? "s" : ""}: </b>
                {genres.join(", ")}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
