import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { IMovie } from '../model/Movie';
import MovieService, { IMovieService } from '../service/MovieService';

const initialState: IMovie[] = [];
const movieService: IMovieService = MovieService();

export const fetchMovies = createAsyncThunk('fetchMovies', async () => {
    const response = await movieService.getMovies();
    return response;
})

const MovieListSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            const movies = action.payload;
            let existingMovies = state;
            existingMovies = movies;
            return existingMovies; 
        })
    }
})

export default MovieListSlice.reducer;