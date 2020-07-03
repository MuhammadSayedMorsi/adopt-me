import React from "react"

export default function Pet({ name, animal, breed, media, location, id }) {
  // if media which photos has any length to it,, then will say hero will equall media[0].small which is the first image,,, so that will give me the first image i can find or image form placecorgi website
  let hero = "http://placecorgi.com/300/300"
  if (media.length) {
    hero = media[0].small;
  }
  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </a>
  );
}
