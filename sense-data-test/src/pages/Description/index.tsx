import React, { useState, useEffect } from 'react';
import { Movie } from '../../interfaces/interfaces';
import api from '../../services/api';
import apikey from '../../services/apiKey';
import * as S from './styled';
import { Section } from '../../components/section';
import { useHistory } from 'react-router-dom';

export default function Description() {
    const history = useHistory();
    const [movie, setMovie] = useState<Movie[]>([]);
    const dados: Movie[] = [];

    useEffect(() => {
        const movieSelected = localStorage.getItem("movie-selected");
        api.get(`/?i=${movieSelected}&apikey=${apikey}`)
            .then(response => {
                const objMovie = {
                    title: response.data.Title,
                    year: response.data.Year,
                    released: response.data.Released,
                    runtime: response.data.Runtime,
                    genre: response.data.Genre,
                    director: response.data.Director,
                    poster: response.data.Poster,
                    imdbid: response.data.imdbID,
                    writer: response.data.Writer,
                    actors: response.data.Actors,
                    plot: response.data.Plot,
                    language: response.data.Language,
                    country: response.data.Country,
                    awards: response.data.Awards,
                    imdbId: response.data.imdbID,
                    type: response.data.Type,
                    production: response.data.Production
                }
                dados.push(objMovie);
                setMovie(dados);
            })
    }, [])

    function handleButton() {
        history.push('/');
    }
    return (
        <div>
            <S.Content>
                {
                    movie.map((movie: Movie, index) => {
                        return (
                            <S.Card>
                                <div>
                                    <S.Img src={movie.poster} />
                                    <p>{movie.title}</p>
                                    <p>{movie.year}</p>
                                    <p>Lançamento: {movie.released}</p>
                                    <p>Duração: {movie.runtime}</p>
                                    <p>Gênero: {movie.genre}</p>
                                    <p>Diretor: {movie.director}</p>
                                </div>
                                <S.CardDesc>
                                    <Section section="Escritor" text={movie.writer} />
                                    <Section section="Atores" text={movie.actors} />
                                    <Section section="Sinopse" text={movie.plot} />
                                    <Section section="País e Linguagem" text={`${movie.country} e ${movie.language} `} />
                                    <Section section="Prêmios" text={movie.awards} />
                                    <p>Tipo: {movie.type}</p>
                                    {movie.production != null ? <p>Produção: {movie.production}</p> : ""}
                                </S.CardDesc>
                            </S.Card>
                        )
                    })
                }
                <S.Button onClick={handleButton}>Voltar</S.Button>
            </S.Content>
        </div>
    );
}