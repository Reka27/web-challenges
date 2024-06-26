import "./FavoriteButton.css";
import { useState } from "react";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";

export default function FavoriteButton() {
  // this should be a state variable
  const [isFavorite, setisFavorite] = useState(false);

  return (
    <button
      className="favorite-button"
      onClick={() => {
        setisFavorite(!isFavorite);
        console.log("favorite button clicked");
      }}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
