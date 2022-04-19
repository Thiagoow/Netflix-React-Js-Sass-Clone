import React from "react";

export default function SectionRow({ title, items }) {
  return (
    <div className="sectionRow">
      <h2 className="title">{title}</h2>

      <div className="section">
        {/* If there are results (> 0), render: */}
        <div className="content">
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
