export interface MovieBase {
    title: string,
    year: string,
    released: string,
    runtime: number,
    genre: string,
    director: string,
    poster: string,
    imdbid: string
}

export interface Movie extends MovieBase {        
    writer: string,
    actors: string,
    plot: string,
    language: string,
    country: string,
    awards: string,    
    type: string,
    production: string
}

export interface MovieInput {
    movies: MovieBase[]
}