import 'antd/dist/antd.css';
import { Button, Input, List, Popover } from 'antd';
import { IMovie } from '../../model/Movie';
import MoviePreview from './MoviePreview';

const MovieList = ({movieList, query, filterData, sortMovies, selectItem, clear}: 
    {movieList: IMovie[], query: string, filterData: any, sortMovies: any, selectItem: any, clear: any}) => {

    const popoverContent = () => {
        return <div className='popover'>
            <Button onClick={() => sortMovies('episode')}>Episode</Button>
            <Button onClick={() => sortMovies('date')}>Date</Button>
        </div>
    }

    const renderMovies = () => {
        return <List
                    bordered
                    dataSource={movieList}
                    renderItem={(item) => (
                    <List.Item onClick={() => {
                        selectItem(item);
                    }}>
                        <MoviePreview movie={item} />
                    </List.Item>
                    )}
                />
    }

    return (
        <div className="movies-list-container">
            <div className="form">
                <Popover content={popoverContent} title="Sort by">
                    <Button type="primary">Sort by...</Button>
                </Popover>
                <Input onChange={filterData} value={query} />
                <Button type="primary" onClick={clear}>Clear all</Button>
            </div>
            <div>{renderMovies()}</div>
        </div>
    );
};

export default MovieList;