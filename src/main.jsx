import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import StarRating from "./StarRating.jsx";
import { useState } from "react";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  function onSetMovieRating(rating) {
    setMovieRating(rating);
  }
  return (
    <div>
      <StarRating
        color={"blue"}
        maxRating={5}
        onMovieRating={onSetMovieRating}
      />
      <p>this movie was rated {movieRating} stars</p>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <StarRating maxRating={10} />
    <StarRating
      size={28}
      color={"red"}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating maxRating={15} size={58} color={"cyan"} />
    <Test />
  </StrictMode>,
);
