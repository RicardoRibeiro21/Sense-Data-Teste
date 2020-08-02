import React, { useState, useEffect, ChangeEvent } from 'react';
import api from '../../services/api';
import apiKey from '../../services/apiKey';
import * as S from './styled';
import { Menu } from '../../components/navbar';
import { MovieBase, Movie } from '../../interfaces/interfaces';
import apikey from '../../services/apiKey';
import { useHistory } from 'react-router-dom';
import { isNullOrUndefined } from 'util';

// Filmes e séries recomendadas
const recommended = [
    'tt3896198',
    'tt0372784',
    'tt0944947'
]

export default function Home() {
    const [movies, setMovies] = useState<MovieBase[]>([]);
    const [search, setSearch] = useState<String>(String);
    const [moviesInput, setMoviesInput] = useState([]);
    const dados: MovieBase[] = [];    
    const history = useHistory();    

    // Função principal para resgatar os filmes recomendados
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
    }, [recommended])
    console.log(movies);

    // Setando o valor digitado no input
    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { value } = event.target;

        setSearch(value);  
    }

    // Console log mostrando os resultados a partir da busca pelo usuário
    useEffect(() => {
        api.get(`/?s=${search}&apikey=${apikey}`)
            .then((response) => {
                let dadosT = response.data.Search;
                setMoviesInput(dadosT);
                console.log("Movies input", moviesInput);
            })
    }, [search]);

    // Redireciona para a página de descrição do filme selecionado
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
                                    <p>Diretor: {isNullOrUndefined(movie.director) ? "" : movie.director}</p>
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
