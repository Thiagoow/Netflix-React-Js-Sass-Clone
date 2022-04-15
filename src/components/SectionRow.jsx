import React from "react";

export default function SectionRow({ title, items }) {
  return (
    <>
      <h2>{title}</h2>

      <div className="movieRow listArea">
        {/* If there are results (> 0), render: */}
        {items.results.length > 0 &&
          items.results.map((item, key) => (
            <div key={key} className="item">
              <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} />
            </div>
          ))}
      </div>
    </>
  );
}
