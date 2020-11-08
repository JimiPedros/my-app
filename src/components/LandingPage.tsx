import React, { useEffect, useState } from 'react';
import { MovieServiceInt } from '../services/MovieService'
import { Movie } from '../types/Movie'
import Select from 'react-select';
import { PageResponse } from '../types/PageResponse';

function LandingPage(props: {service: MovieServiceInt}) {

  const [inputValue, setInputValue] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Array<Movie>>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  }

  const onClickMovie = (m: Movie): void => {
    setSelectedMovie(m)
  }

  const onClickBack = (): void =>  {
    setSelectedMovie(undefined)
  }

  // Alternative Lazy Option
  // useEffect(() => {
  //   inputValue && fetch(`https://api.themoviedb.org/3/search/movie?query=${inputValue}&api_key=0a754449f6a55255156338eb634ae83d&language=en-US`)
  //     .then(r => r.json())
  //     .then(r => setSearchResults(r.results))
  // }, [inputValue]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await props.service.searchByTitle(inputValue);
      setSearchResults(movies)
    }
    inputValue && fetchMovies();
  }, [inputValue]);

  useEffect(() => {
    !inputValue && setSearchResults([])
  }, [inputValue]);

  return (
    <div className="LandingPage">

      { selectedMovie &&
        <div onClick={() => onClickBack()}>back</div>
      }

      <input onChange={handleInputChange} />

      { searchResults.map((m) =>
        <div onClick={() => onClickMovie(m)}>{m.title}</div>)
      }

      { selectedMovie &&
        <div>123</div>
      }

    </div>
  );
}

export default LandingPage;
