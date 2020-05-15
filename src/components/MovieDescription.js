import React from "react";
import { Link } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";

function MovieDescription({ movie }) {
  return (
<div className="card">
<img className="card--image" src={movie.image} alt=""/>
<div className="card--content">
    <h3 className="card--title">{movie.name}</h3>
    <p><small>RELEASE DATE: {movie.year}</small></p>
    <p><small>Rating:  <StarRatingComponent className="rating-star" name="rate1" starCount={5} 
    value={movie.rating} /></small></p>
    <p className="card--desc">{movie.description}</p>
    <br/><br/>
    <Link  to="/"><h5>Back Home </h5></Link>
    </div>
    <br/><br/>
    <input type="number" />
    <button type="button" class="btn btn-outline-dark btn-lg btn-block">Add to cart</button>
    </div>
  );
}

export default MovieDescription; 
