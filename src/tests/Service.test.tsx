import axios from 'axios'
import { MovieService } from '../services/MovieService'
import MockAdapter from 'axios-mock-adapter'
import { apiKey } from '../types/Constants'

describe('MovieService -', () => {
    let service: MovieService
    let axiosMock: MockAdapter

    beforeEach(() => {
        service = new MovieService()
        axiosMock = new MockAdapter(axios)

        console.error = jest.fn()
    })

    it('should return details of a movie', async () => {
      // Arrange
      axiosMock
          .onGet(`https://api.themoviedb.org/3/movie/1?api_key=${apiKey}&language=en-US`)
          .replyOnce(200, {id: 1, title: 'foo'})

      // Act
      const movieDetails = await service.getMovieDetails(1)

      // Assert
      expect(movieDetails).toStrictEqual({id: 1, title: 'foo'})
    })

    it('should return list of movies', async () => {
      // Arrange
      axiosMock
          .onGet(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=bar`)
          .replyOnce(200, {
            results: [{id: 1, title: 'bar'}]
          })

      // Act
      const movieSearchResults = await service.searchByTitle('bar')

      // Assert
      expect(movieSearchResults).toStrictEqual([{id: 1, title: 'bar'}])
    })

})
