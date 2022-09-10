import Character from '../model/Character';
import Movie, { IMovie } from '../model/Movie';
import Planet from '../model/Planet';
import Specie from '../model/Specie';
import Starship from '../model/Starship';
import Vehicle from '../model/Vehicle';

export interface IMovieService {
    getMovies(): Promise<IMovie[]>;
    getCharactersData(movie: IMovie): Promise<IMovie>;
    getPlanetsData(movie: IMovie): Promise<IMovie>;
    getStarshipsData(movie: IMovie): Promise<IMovie>;
    getVehiclesData(movie: IMovie): Promise<IMovie>;
    getSpeciesData(movie: IMovie): Promise<IMovie>;
}

const MEDIA_TYPE = "format=json"

const MovieService = (): IMovieService => {
    return {
        async getMovies(){
            const requestOptions = {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json'
                }
            };
            let response = await fetch(`${process.env.REACT_APP_API}?${MEDIA_TYPE}`, requestOptions);

            const jsonResponse = await response.json();
            let movies = jsonResponse?.results?.map( (item: any) =>{
                let object = Movie(item);
                return object;
            });
            return movies;
        },

        async getCharactersData(movie: IMovie){
            const requestOptions = {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json'
                }
            };
            let characterData = await Promise.all(movie?.characters?.map(async link => {
                let response = await fetch(link, requestOptions);
                let jsonResponse = await response.json();
                return Character(jsonResponse);
            }));
            movie.characterData = characterData;
            return movie;
        },

        async getPlanetsData(movie: IMovie){
            const requestOptions = {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json'
                }
            };
            let planetData = await Promise.all(movie?.planets?.map(async link => {
                let response = await fetch(link, requestOptions);
                let jsonResponse = await response.json();
                return Planet(jsonResponse);
            }));
            movie.planetData = planetData;
            return movie;
        },

        async getStarshipsData(movie: IMovie){
            const requestOptions = {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json'
                }
            };
            let starshipData = await Promise.all(movie?.starships?.map(async link => {
                let response = await fetch(link, requestOptions);
                let jsonResponse = await response.json();
                return Starship(jsonResponse);
            }));
            movie.starshipData = starshipData;
            return movie;
        },

        async getVehiclesData(movie: IMovie){
            const requestOptions = {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json'
                }
            };
            let vehicleData = await Promise.all(movie?.vehicles?.map(async link => {
                let response = await fetch(link, requestOptions);
                let jsonResponse = await response.json();
                return Vehicle(jsonResponse);
            }));
            movie.vehicleData = vehicleData;
            return movie;
        },

        async getSpeciesData(movie: IMovie){
            const requestOptions = {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json'
                }
            };
            let specieData = await Promise.all(movie?.species?.map(async link => {
                let response = await fetch(link, requestOptions);
                let jsonResponse = await response.json();
                return Specie(jsonResponse);
            }));
            movie.specieData = specieData;
            return movie;
        }
    }
};

export default MovieService;