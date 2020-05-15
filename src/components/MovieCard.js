import React from "react";
import {  Link } from "react-router-dom"
import EditForm from "./EditForm";
import StarRatingComponent from "react-star-rating-component";

function MovieCard({ movie, deleteMovie = () => {} }) {
  return (

<div className="card" >
<img className="card--image" src={movie.image} alt=""/>

<div className="card--content">
    <h3 className="card--title">{movie.name}</h3>
    <p><small>RELEASE DATE: {movie.year}</small></p>
    <p><small>Rating: <StarRatingComponent className="rating-star" name="rate1" starCount={5}
    value={movie.rating} /></small></p>
    <p className="card--desc">{movie.description}</p>
</div>

<Link to ={`/${movie.id}`}><button type="button" class="btn btn-outline-dark btn-lg btn-block">DESCRIPTION</button></Link>
 <button  type="button" class="btn btn-outline-danger btn-lg btn-block" onClick={deleteMovie}>DELETE</button>
<EditForm movie={movie} />
</div> 

  );
}

export default MovieCard;



