import React from 'react'
import { MovieDetails } from '../types/MovieDetails'
import './styles.css'

function DetailsPage(props: { movie: MovieDetails }) {
  return (
    <div className="DetailPage">
      <h1>Details Page</h1>
      <div className='container'>
        <div className='boxes'>
          <h2>{props.movie.title}</h2>
          <p>{props.movie.tagline}</p>
        </div>
        <div className='boxes'>
          <h4>Runtime</h4>
          <p>{props.movie.runtime}</p>
        </div>
        <div className='boxes'>
          <h4>Release Date</h4>
          <p>{props.movie.release_date}</p>
        </div>
      </div>
    </div>
  )
}

export default DetailsPage
