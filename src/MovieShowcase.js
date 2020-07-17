import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'
import { moveCursor } from 'readline';

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
  return  movieData.map(movie => { return  <MovieCard title= {movie.title} IMDBRating={movie.IMDBRating} genres={movie.genres} poster={movie.poster}/>}   ) 
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
