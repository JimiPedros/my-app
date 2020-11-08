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
        id='search-input'
        onChange={props.onChangeSearch}
        placeholder='Search movie'
      />

      { props.searchResults.map((m) =>
        <div
          className='dropdown-item'
          onClick={() => props.onClickMovie(m)}
          key={m.id}
        >
          {m.title}
        </div>
      )}

    </div>
  )
}

export default LandingPage
