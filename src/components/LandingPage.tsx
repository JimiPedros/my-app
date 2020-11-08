import React, { useEffect, useState } from 'react';
import { Movie } from '../types/Movie';

type Props = {
  onChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClickMovie: (m: Movie) => void
  searchResults: Array<Movie>
}

function LandingPage(props: Props) {
  return (
    <div className="LandingPage">
      <input onChange={props.onChangeSearch} />
      { props.searchResults.map((m) =>
        <div onClick={() => props.onClickMovie(m)}>{m.title}</div>)
      }
    </div>
  );
}

export default LandingPage;
