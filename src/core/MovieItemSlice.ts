import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IMovie } from '../model/Movie';
import MovieService, { IMovieService } from '../service/MovieService';

const initialState: any = {};
const movieService: IMovieService = MovieService();

export const fetchCharacters = createAsyncThunk('fetchCharacters', async (params: any) => {
    const response = await movieService.getCharactersData(params);
    return response;
});

export const fetchPlanets = createAsyncThunk('fetchPlanets', async (params: any) => {
    const response = await movieService.getPlanetsData(params);
    return response;
});

export const fetchStarships = createAsyncThunk('fetchStarships', async (params: any) => {
    const response = await movieService.getStarshipsData(params);
    return response;
});

export const fetchVehicles = createAsyncThunk('fetchVehicles', async (params: any) => {
    const response = await movieService.getVehiclesData(params);
    return response;
});

export const fetchSpecies = createAsyncThunk('fetchSpecies', async (params: any) => {
    const response = await movieService.getSpeciesData(params);
    return response;
});

const MovieItemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        itemSelected(state, action){
            const item = action.payload;
            let existingItem = state;
            existingItem = item;
            return existingItem;
          }
    },
    extraReducers(builder) {
        builder.addCase(fetchCharacters.fulfilled, (state, action) => {
            const item = action.payload;
            let existingItem: IMovie = state;
            existingItem = item;
            return existingItem; 
        })
        builder.addCase(fetchPlanets.fulfilled, (state, action) => {
            const item = action.payload;
            let existingItem: IMovie = state;
            existingItem = item;
            return existingItem; 
        })
        builder.addCase(fetchStarships.fulfilled, (state, action) => {
            const item = action.payload;
            let existingItem: IMovie = state;
            existingItem = item;
            return existingItem; 
        })
        builder.addCase(fetchVehicles.fulfilled, (state, action) => {
            const item = action.payload;
            let existingItem: IMovie = state;
            existingItem = item;
            return existingItem; 
        })
        builder.addCase(fetchSpecies.fulfilled, (state, action) => {
            const item = action.payload;
            let existingItem: IMovie = state;
            existingItem = item;
            return existingItem; 
        })
    }
})
export const { itemSelected } = MovieItemSlice.actions

export default MovieItemSlice.reducer;