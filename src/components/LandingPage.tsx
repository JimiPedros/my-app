import React from 'react';
import { Movie } from '../types/Movie';

type Props = {
  onClickMovie: (m: Movie) => void
  onChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
  searchResults: Array<Movie>
}

function LandingPage(props: Props) {
  return (
    <div className="LandingPage">
      <h1>Landing Page</h1>
      <input
        className='search-input'
        onChange={props.onChangeSearch}
        placeholder='Enter a movie title'
      />
      { props.searchResults.map((m) =>
        <div className='dropdown-item' onClick={() => props.onClickMovie(m)}>{m.title}</div>)
      }
    </div>
  );
}

export default LandingPage;
