import React from "react";
import "./movieCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../globals/fontawesome";

const MovieCard = props => {
  return (
    <div className="col-sm-3">
      <div className="card  bg-white">
        <img
          className="card-img-tag center "
          alt={props.movie.title}
          src={
            props.movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`
              : "./film-poster-placeholder.png"
          }
          
        />
        <div className="card-body">
          <h4 className="card-title ">{props.movie.title}</h4>
          <p>
            <FontAwesomeIcon icon={["fas", "calendar"]} />
            <span> {props.movie.release_date}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span> {props.movie.vote_average}</span>
          </p>
        </div>
        <div className="card-footer">
        <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-primary"><FontAwesomeIcon icon={["fas", "fa-heart"]} />Add to Favourite</button>
        <button type="button" class="btn btn-primary"><i class="fas fa-shopping-basket"></i>Add to Basket</button>
        </div>
          
        </div>
      </div>
    </div>
  );
};

export default MovieCard ;