const BaseUrl = "https://api.themoviedb.org/3";
const APIkey = "a936a97a7b6448430a09401f17ec508f";

const APIfetch = async (endpoint) => {
  try {
    const res = await fetch(`${BaseUrl}${endpoint}&language=pt-br&region=br`);
    const json = await res.json();

    return json;
  } catch (error) {
    return error;
  }
};

/* Genres list: 
https://api.themoviedb.org/3/genre/list?api_key=#&language=pt-br&region=br
*/
export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais da Netflix",
        items: await APIfetch(
          `/discover/tv?api_key=${APIkey}&with_networks=213&with_genres=10759`
        )
      },
      {
        slug: "topRated",
        title: "Recomendados para você",
        items: await APIfetch(
          `/tv/top_rated?api_key=${APIkey}&with_networks=213`
        )
      },
      {
        slug: "documentaries",
        title: "Documentários",
        items: await APIfetch(
          `/discover/tv?api_key=${APIkey}&with_networks=213&with_genres=99`
        )
      },
      {
        slug: "trending",
        title: "Em alta",
        items: await APIfetch(
          `/trending/all/week?api_key=${APIkey}&with_networks=213`
        )
      },
      {
        slug: "animations",
        title: "Filmes de animação",
        items: await APIfetch(
          `/discover/movie?api_key=${APIkey}&with_networks=213&with_genres=16`
        )
      },

      /*
      {
        slug: "action",
        title: "Ação e aventura",
        items: await APIfetch(
          `/discover/tv?api_key=${APIkey}&with_networks=213&with_genres=10759`
        )
      }, 
      */
      {
        slug: "history",
        title: "Inspirados na realidade",
        items: await APIfetch(
          `/discover/movie?api_key=${APIkey}&with_networks=213&with_genres=36`
        )
      },
      {
        slug: "romance",
        title: "Histórias de amor",
        items: await APIfetch(
          `/discover/movie?api_key=${APIkey}&with_networks=213&with_genres=10749`
        )
      },
      {
        slug: "horror",
        title: "De roer as unhas",
        items: await APIfetch(
          `/discover/movie?api_key=${APIkey}&with_networks=213&with_genres=27`
        )
      }
    ];
  }
};
