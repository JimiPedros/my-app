import { MovieStatus } from './MovieStatus'
import { ProductionCompany } from './ProductionCompany'

export type MovieDetails = {
    adult: boolean
    backdrop_path: string
    belongs_to_collection: null | object
    budget: number
    genres: Array<{
        id: number,
        name: string
    }>
    homepage: null | string
    id: number
    imdb_id: null | string
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: Array<ProductionCompany>
    production_countries: Array<{
        iso_3166_1: string
        name: string
    }>
    release_date: string
    revenue: number
    runtime: null | number
    spoken_languages: Array<{
        iso_639_1: string
        name: string
    }>
    status: MovieStatus
    tagline: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}
