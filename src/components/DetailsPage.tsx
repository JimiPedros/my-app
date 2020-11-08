import React from 'react';
import { MovieDetails } from '../types/MovieDetails';

function DetailsPage(props: { movie: MovieDetails }) {
  return (
    <div className="DetailPage">
      <div>{props.movie.title}</div>
      <div>{props.movie.tagline}</div>
      <div>{props.movie.release_date}</div>
      <div>{props.movie.revenue}</div>
      <div>{props.movie.runtime}</div>
    </div>
  );
}

export default DetailsPage;
