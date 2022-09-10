import MovieService from '../service/MovieService';
import RomanNumberService from '../service/RomanNumberService';

let movieService = MovieService();
let romanNumberService = RomanNumberService();

jest.setTimeout(10000);

test('getMovies function returns valid result', async () => {
    let movies = await movieService.getMovies();
    expect(movies).not.toBeUndefined();
    expect(movies?.length).not.toBeNull();
});

test('getMovies function returns more than zero results', async () => {
    let movies = await movieService.getMovies();
    expect(movies?.length).toBeGreaterThan(0);
});

test('getCharactersData function returns valid result', async () => {
    let movies = await movieService.getMovies();
    let movieResult = await movieService.getCharactersData(movies[0]);
    expect(movieResult).not.toBeUndefined();
    expect(movieResult.characterData).not.toBeNull();
});

test('getPlanetsData function returns valid result', async () => {
    let movies = await movieService.getMovies();
    let movieResult = await movieService.getPlanetsData(movies[0]);
    expect(movieResult).not.toBeUndefined();
    expect(movieResult.planetData).not.toBeNull();
});

test('getStarshipsData function returns valid result', async () => {
    let movies = await movieService.getMovies();
    let movieResult = await movieService.getStarshipsData(movies[0]);
    expect(movieResult).not.toBeUndefined();
    expect(movieResult.starshipData).not.toBeNull();
});

test('getVehiclesData function returns valid result', async () => {
    let movies = await movieService.getMovies();
    let movieResult = await movieService.getVehiclesData(movies[0]);
    expect(movieResult).not.toBeUndefined();
    expect(movieResult.vehicleData).not.toBeNull();
});

test('getSpeciesData function returns valid result', async () => {
    let movies = await movieService.getMovies();
    let movieResult = await movieService.getSpeciesData(movies[0]);
    expect(movieResult).not.toBeUndefined();
    expect(movieResult?.specieData).not.toBeNull();
});

test('getRomanNumber function returns valid roman number 3', async () => {
    let romanNumber = await romanNumberService.getRomanNumber(3);
    expect(romanNumber).toBe("III");
});

test('getRomanNumber function returns valid roman number 6', async () => {
    let romanNumber = await romanNumberService.getRomanNumber(6);
    expect(romanNumber).toBe("VI");
});

test('getRomanNumber function returns valid roman number 9', async () => {
    let romanNumber = await romanNumberService.getRomanNumber(9);
    expect(romanNumber).toBe("IX");
});