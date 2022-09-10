import { IMovie} from "../../model/Movie";
import { List } from 'antd';
import { useState } from "react";
import { useAppDispatch } from '../../core/Hooks';
import { fetchCharacters, fetchPlanets, fetchSpecies, fetchStarships, fetchVehicles } from "../../core/MovieItemSlice";
import CharacterDetails from "./CharacterDetails";
import PlanetDetails from "./PlanetDetails";
import StarshipDetails from "./StarshipDetails";
import VehicleDetails from "./VehicleDetails";
import SpecieDetails from "./SpecieDetails";

var Loader = require('react-loader');

const MovieDetails = ({item}: {item: IMovie}) => {

  const dispatch = useAppDispatch();
  const [loaded, setLoaded] = useState(true);
  const [charactersVisible, setCharactersVisible] = useState(false);
  const [planetsVisible, setPlanetsVisible] = useState(false);
  const [starshipsVisible, setStarshipsVisible] = useState(false);
  const [vehiclesVisible, setVehiclesVisible] = useState(false);
  const [speciesVisible, setSpeciesVisible] = useState(false);

  const getCharacterData = async () => {
    if(item?.characterData?.length > 0) {
        setCharactersVisible(true);
        return;
    }
    setLoaded(false);
    let response = await dispatch(fetchCharacters(item));
    if(response){
        setLoaded(true);
        setCharactersVisible(true);
    }
  }

  const clearCharacterData = async () => {
    setCharactersVisible(false);
  }
  

  const getPlanetData = async () => {
    if(item?.planetData?.length > 0) {
        setPlanetsVisible(true);
        return;
    }
    setLoaded(false);
    let response = await dispatch(fetchPlanets(item));
    if(response){
        setLoaded(true);
        setPlanetsVisible(true);
    }
  }

  const clearPlanetData = async () => {
    setPlanetsVisible(false);
  }

  const getStarshipData = async () => {
    if(item?.starshipData?.length > 0) {
        setStarshipsVisible(true);
        return;
    }
    setLoaded(false);
    let response = await dispatch(fetchStarships(item));
    if(response){
        setLoaded(true);
        setStarshipsVisible(true);
    }
  }

  const clearStarshipData = async () => {
    setStarshipsVisible(false);
  }

  const getVehicleData = async () => {
    if(item?.starshipData?.length > 0) {
        setVehiclesVisible(true);
        return;
    }
    setLoaded(false);
    let response = await dispatch(fetchVehicles(item));
    if(response){
        setLoaded(true);
        setVehiclesVisible(true);
    }
  }

  const clearVehicleData = async () => {
    setVehiclesVisible(false);
  }

  const getSpecieData = async () => {
    if(item?.starshipData?.length > 0) {
        setSpeciesVisible(true);
        return;
    }
    setLoaded(false);
    let response = await dispatch(fetchSpecies(item));
    if(response){
        setLoaded(true);
        setSpeciesVisible(true);
    }
  }

  const clearSpecieData = async () => {
    setSpeciesVisible(false);
  }

  return (
     <div className="item-data">
        <h1 className="item-data-title">{item?.title}</h1>
        <div className="item-data-details">
            {item?.title && 
                <List.Item>
                    <List.Item.Meta
                        description={item?.opening_crawl}
                    />
                </List.Item>
            }
            {item?.director && 
                <List.Item>
                    <List.Item.Meta
                        title="Direted by"
                        description={item?.director}
                    />
                </List.Item>
            }
            {item?.producer && 
                <List.Item>
                    <List.Item.Meta
                        title="Produced by"
                        description={item?.producer}
                    />
                </List.Item>
            }
            {item?.release_date && 
                <List.Item>
                    <List.Item.Meta
                        title="Released"
                        description={item?.release_date}
                    />
                </List.Item>
            }
            <Loader loaded={loaded}>
            {!charactersVisible || !item?.characterData ?
                <h4 className="details-title-1" onClick={getCharacterData}>Characters [+]</h4> : 
                <div><h4 className="details-title-2" onClick={clearCharacterData}>Characters [-]</h4>
                <CharacterDetails characterData={item?.characterData} /></div>
            }
            {!planetsVisible || !item?.planetData ?
                <h4 className="details-title-1" onClick={getPlanetData}>Planets [+]</h4> : 
                <div><h4 className="details-title-2" onClick={clearPlanetData}>Planets [-]</h4> 
                <PlanetDetails planetData={item?.planetData} /></div>
            }
            {!starshipsVisible || !item?.starshipData ? 
                <h4 className="details-title-1" onClick={getStarshipData}>Starships [+]</h4> : 
                <div><h4 className="details-title-2" onClick={clearStarshipData}>Starships [-]</h4>
                <StarshipDetails starshipData={item?.starshipData} /></div>
            }
            {!vehiclesVisible || !item?.vehicleData ? 
                <h4 className="details-title-1" onClick={getVehicleData}>Vehicles [+]</h4> : 
                <div><h4 className="details-title-2" onClick={clearVehicleData}>Vehicles [-]</h4>
                <VehicleDetails vehicleData={item?.vehicleData} /></div>
            }
            {!speciesVisible || !item?.specieData  ? 
                <h4 className="details-title-1" onClick={getSpecieData}>Species [+]</h4> : 
                <div><h4 className="details-title-2" onClick={clearSpecieData}>Species [-]</h4>
                <SpecieDetails specieData={item?.specieData} /></div>
            }
            </Loader>
        </div>
     </div>
  );
};

export default MovieDetails;