import Page from './Page';
import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../core/Hooks';
import { fetchMovies } from '../../core/MovieListSlice';
import { RootState } from '../../core/Store';
import 'antd/dist/antd.css';
import MovieList from '../components/MovieList';
import MovieDetails from '../components/MovieDetails';
import { IMovie } from '../../model/Movie';
import { itemSelected } from '../../core/MovieItemSlice';

var Loader = require('react-loader');

const MainPage = () => {

    const movies = useAppSelector((state: RootState) => { return state.movies });
    const selectedItem = useAppSelector((state: RootState) => { return state.item });

    const dispatch = useAppDispatch();
    const [loaded, setLoaded] = useState(true);
    const [query, setQuery] = useState("");
    const [movieList, setMovieList] = useState(movies);

    useEffect(() => {
        fetchData();
      }, []); 

    const fetchData = async () => {
        setLoaded(false);
        let response = await dispatch(fetchMovies());
        if(response){
            setLoaded(true);
        }
    };

    const filterData = (e: any) => {
        let query = e.target.value;
        if(query.trim().length === 0 && query.length !== 0){
            return;
        }
        setQuery(query);
        let filteredMovies = movies.filter(item => item?.title?.toUpperCase().includes(query.toUpperCase()) || 
        item?.episode_id?.toString().includes(query) || item?.release_date?.toString().includes(query));
        setMovieList(filteredMovies);
    }

    const sortMovies = (sortItem: string) => {
        setLoaded(false);
        if(sortItem === 'episode'){
            let filteredMovies = movies.slice().sort((a, b) => a.episode_id  - b.episode_id);
            setMovieList(filteredMovies);
        }
        else{
            let filteredMovies = movies.slice().sort();
            setMovieList(filteredMovies);
        }
        setLoaded(true);
    }

    const selectItem = (item: IMovie) => {
        dispatch(itemSelected(item));
    }

    const clear = () => {
        setMovieList(movies);
        setQuery("");
        dispatch(itemSelected(null));
    }

    return (
        <Page>
            <Loader loaded={loaded}>
                <div className="main-container">
                    <MovieList query={query} 
                        movieList={movieList.length === 0 && query === "" ? movies : movieList} 
                        filterData={filterData} sortMovies={sortMovies} selectItem={selectItem} clear={clear} />
                    <div className="selected-item-container">
                        {selectedItem && selectedItem?.title ? 
                        <MovieDetails item={selectedItem} /> : <div className='no-data-text'>No movie selected</div> }
                    </div>
                </div>
            </Loader>
        </Page>
    );
  };
  
  export default MainPage;