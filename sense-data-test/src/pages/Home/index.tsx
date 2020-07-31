import React, { useState, useEffect, ChangeEvent } from 'react';
import api from '../../services/api';
import apiKey from '../../services/apiKey';
import * as S from './styled';
import { Menu } from '../../components/navbar';
import { MovieBase, Movie } from '../../interfaces/interfaces';
import apikey from '../../services/apiKey';
import { useHistory } from 'react-router-dom';

// Filmes e séries recomendadas
const recommended = [
    'tt3896198',
    'tt0372784',
    'tt0944947'
]
interface MovieId {
    imdbID: string;
}

export default function Home() {
    const [movies, setMovies] = useState<MovieBase[]>([]);
    const [search, setSearch] = useState<String>(String);
    const [moviesInput, setMoviesInput] = useState<MovieBase[]>([]);
    const dados: MovieBase[] = [];
    const dadosInput: MovieBase[] = [];
    const history = useHistory();

    useEffect(() => {
        recommended.map(item => {
            api.get(`/?i=${item}&apikey=${apikey}`)
                .then(response => {
                    const objMovie = {
                        title: response.data.Title,
                        year: response.data.Year,
                        released: response.data.Released,
                        runtime: response.data.Runtime,
                        genre: response.data.Genre,
                        director: response.data.Director,
                        poster: response.data.Poster,
                        imdbid: response.data.imdbID
                    }
                    dados.push(objMovie);
                    setMovies([...dados])
                })
        })
    }, [])
    console.log(movies);

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { value } = event.target;

        setSearch(value);
    }

    useEffect(() => {        
        api.get(`/?s=${search}&apikey=${apikey}`)
                .then((response) => {
                    const a = response.data.Search;
                    console.log(typeof (response.data.Search));                   
                    setMoviesInput(dadosInput)
                    console.log(moviesInput);
                    // moviesInput.map((item, i) => {                      
                    //     console.log(item[0]);
                    //     const objMovie = {
                    //         title: item.title,
                    //         year: response.data.Search.Year,
                    //         released: response.data.Search.Released,
                    //         runtime: response.data.Search.Runtime,
                    //         genre: response.data.Search.Genre,
                    //         director: response.data.Search.Director,
                    //         poster: response.data.Search.Poster,
                    //         imdbid: response.data.Search.imdbID
                    //     }                
                    //     dadosInput.push(objMovie);
                    //     setMoviesInput(dadosInput);                
                    // })
                })            
    }, [search]);

    function handleButtonClick(index: number) {
        const { imdbid } = movies[index];

        localStorage.setItem("search-movies", imdbid);

        history.push('/description');
    }

    function handleButtonSearch() {
        history.push('/description');
    }

    return (
        <S.Body>
            <Menu funcao={handleInputChange} funcaoButton={handleButtonSearch} />
            <S.Titulo>Recomendados para você</S.Titulo>
            <S.Content>
                {/* {moviesInput != null ? "" : moviesInput.map((movie: MovieBase) => {
                    return <p>{movie.title}</p>
                })} */}
                {
                    movies.map((movie: MovieBase, index) => {
                        return (
                            <S.Card>
                                <S.Img src={movie.poster} />
                                <div>
                                    <p>{movie.title}</p>
                                    <p>{movie.year}</p>
                                    <p>Lançamento: {movie.released}</p>
                                    <p>Duração: {movie.runtime}</p>
                                    <p>Gênero: {movie.genre}</p>
                                    <p>Diretor: {movie.director}</p>
                                </div>
                                <S.Button onClick={() => handleButtonClick(index)}>Ver detalhes</S.Button>
                            </S.Card>
                        )
                    })
                }
            </S.Content>
        </S.Body>
    )
}
