import React, { useState, useEffect } from 'react';
import './App.css';
import { Movie } from './types/Movie'
import { MovieService } from './services/MovieService';
import LandingPage from './components/LandingPage';
import DetailsPage from './components/DetailsPage';
import { MovieDetails } from './types/MovieDetails';

function App() {

  const service = new MovieService();

  const [inputValue, setInputValue] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Array<Movie>>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie>();
  const [movieDetails, setMovieDetails] = useState<MovieDetails>();

  const handleOnChangeSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  }

  const handleOnClickMovie = (m: Movie): void => {
    setSelectedMovie(m)
  }

  const onClickBack = (): void =>  {
    setSelectedMovie(undefined)
    setMovieDetails(undefined)
    setSearchResults([])
  }

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await service.searchByTitle(inputValue);
      setSearchResults(movies)
    }
    inputValue && fetchMovies();
  }, [inputValue]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const movieDetails = await service.getMovieDetails(selectedMovie!.id);
      setMovieDetails(movieDetails)
    }
    selectedMovie && fetchMovieDetails();
  }, [selectedMovie]);

  // Alternative Lazy Option ¯\_(ツ)_/¯¯
  // useEffect(() => {
  //   inputValue && fetch(`url`)
  //     .then(r => r.json())
  //     .then(r => setSearchResults(r.results))
  //     .catch(e => do some error handling stuff)
  // }, [inputValue]);

  useEffect(() => {
    !inputValue && setSearchResults([])
  }, [inputValue]);

  return (
    <div className="App">

      { selectedMovie &&
        <div className='back-button' onClick={() => onClickBack()}>Back to search</div>
      }

      { !selectedMovie &&
        <LandingPage
          searchResults={searchResults}
          onChangeSearch={handleOnChangeSearch}
          onClickMovie={handleOnClickMovie}
        />
      }

      { movieDetails &&
        <DetailsPage movie={movieDetails}/>
      }

    </div>
  );
}

export default App;
