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
      axiosMock
          .onGet(`https://api.themoviedb.org/3/movie/1?api_key=${apiKey}&language=en-US`)
          .replyOnce(200, {id: 1, title: 'foo'})

      const movieDetails = await service.getMovieDetails(1)

      expect(movieDetails).toStrictEqual({id: 1, title: 'foo'})
    })

    it('should return list of movies', async () => {
      axiosMock
          .onGet(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=bar`)
          .replyOnce(200, {
            results: [{id: 1, title: 'bar'}]
          })

      const movieSearchResults = await service.searchByTitle('bar')

      expect(movieSearchResults).toStrictEqual([{id: 1, title: 'bar'}])
    })

})
