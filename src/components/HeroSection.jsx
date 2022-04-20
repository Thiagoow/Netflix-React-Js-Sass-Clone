import React from "react";

export default function HeroSection({ media }) {
  return (
    <section className="heroSection">
      <h2>Netflix Hero</h2>

      <div className="mediaContent">
        <p>{media.name}</p>
      </div>
    </section>
  );
}
