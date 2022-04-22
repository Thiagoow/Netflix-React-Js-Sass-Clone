import React from "react";

export default function HeroSection({ media }) {
  let mediaBg = `https://image.tmdb.org/t/p/original${media.poster_path}`;
  let mediaYear = new Date(media.first_air_date).getFullYear();
  let genres = [];

  for (let i = 0; i < media.genres.length; i++) {
    genres.push(media.genres[i].name);
    console.log(media.genres[i]);
  }

  return (
    <section
      className="heroSection"
      style={{
        backgroundImage: `url(${mediaBg})`
      }}
    >
      <div className="rightGradient">
        <div className="mediaContent">
          <div className="info">
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
              <button class="primaryBtn">Assistir</button>
              <button class="moreBtn">Mais informações</button>
            </div>

            <p className="genres">
              <b>Gêneros: </b>
              {genres.join(", ")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
