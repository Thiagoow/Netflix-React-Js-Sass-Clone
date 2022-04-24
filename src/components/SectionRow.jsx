import React from "react";

export default function SectionRow({ title, items }) {
  return (
    <div className="sectionRow">
      <h2 className="title">{title}</h2>

      <button className="handle" id="leftBtn">
        <p>‹</p>
      </button>

      <button className="handle" id="rightBtn">
        <p>›</p>
      </button>

      <div className="content">
        {/* If there are results (> 0), render: */}
        <div className="media">
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div key={key} className="item">
                <img
                  src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
