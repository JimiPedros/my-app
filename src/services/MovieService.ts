import { PageResponse } from '../types/PageResponse'
import { Movie } from '../types/Movie'
import { MovieDetails } from '../types/MovieDetails'
import { serviceBaseUrl, apiKey } from '../types/Constants'
import axios from 'axios'

export interface MovieServiceInt {
    /**
     * Search movies by title
     * @param {string} Movie title search query
     * @returns {Response<Movie>} Search result
     */
    searchByTitle(title: string): Promise<Array<Movie>>

    /**
     * Get movie details
     * @param {number} Movie ID
     * @returns {MovieDetails} Details of a particular movie
     */
    getMovieDetails(id: number): Promise<MovieDetails>
}

export class MovieService implements MovieServiceInt {

    public async searchByTitle(title: string): Promise<Array<Movie>> {
        const url = this.createAPIEndpoint(`search/movie`, title)
        try {
            const response = await axios.get<PageResponse<Movie>>(url)
            // @ts-ignore
            return response.data.results
        } catch (error) {
            if (error && error.status_message) {
                throw new Error(error.status_message)
            }
            console.error(error)
            throw new Error('An error occurred.')
        }
    }

    public async getMovieDetails(id: number): Promise<MovieDetails> {
        const url = this.createAPIEndpoint(`movie/${id}`)
        try {
            const response = await axios.get<MovieDetails>(url)
            // @ts-ignore
            return response.data
        } catch (error) {
            if (error && error.status_message) {
                throw new Error(error.status_message)
            }
            console.error(error)
            throw new Error('An error occurred.')
        }
    }

    private createAPIEndpoint(method: string, query?: string): string {
        let url = serviceBaseUrl + method + `?api_key=${apiKey}&language=en-US`
        if (query) {
            url = url + `&query=${query}`
        }
        return url
    }
}
