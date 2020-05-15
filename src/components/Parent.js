import React from 'react';
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import Movie from "./MovieDescription";
import { Route } from "react-router-dom";
import "./../App.css";


function Parent(props) {
  return (
     <div className="container">
     <h1 className="title">Simplon Movie Search</h1>
      <div className="App">
      <div className='header'></div>
      <SearchBar />
      <Route exact path="/" render={() => 
      <MovieList isLoading={props.isLoading} />} />
      {props.movieData.map(movie => (
        <Route key={movie.id} path={`/${movie.id}`}
          render={() => (
            <div><Movie movie={movie} /></div>)}/> ))}
    </div>
    </div>
  );
 }


const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    movieData: state.movieData
  };
}



export default connect(mapStateToProps)(Parent);