import { Collapse, List } from "antd";
import { IPlanet } from "../../model/Planet";
import { IStarship } from "../../model/Starship";

const { Panel } = Collapse;

const StarshipDetails = ({ starshipData} : {starshipData: IStarship[]}) => {

    const renderStarshipData = () => {
        return starshipData?.map(starship => {
            return starship?.name && 
            <Panel header={starship?.name} key={starship?.name}>
                <List.Item>
                    <List.Item.Meta
                        title={"Model"}
                        description={starship?.model}
                    />
                    <List.Item.Meta
                        title={"Manufacturer"}
                        description={starship?.manufacturer}
                    />
                    <List.Item.Meta
                        title={"Cost"}
                        description={starship?.cost_in_credits}
                    />
                    
                    </List.Item>
                    <List.Item>
                    <List.Item.Meta
                        title={"Length"}
                        description={starship?.length}
                    />
                    <List.Item.Meta
                        title={"Max speed"}
                        description={starship?.max_atmosphering_speed}
                    />
                    <List.Item.Meta
                        title={"Crew"}
                        description={starship?.crew}
                    />
                    
                </List.Item>
                <List.Item>
                    <List.Item.Meta
                        title={"Passengers"}
                        description={starship?.passengers}
                    />
                    <List.Item.Meta
                        title={"Cargo capacity"}
                        description={starship?.cargo_capacity}
                    />
                    <List.Item.Meta
                        title={"Consumables"}
                        description={starship?.consumables}
                    />
                    
                </List.Item>
                <List.Item>
                    <List.Item.Meta
                        title={"Hyperdrive rating"}
                        description={starship?.hyperdrive_rating}
                    />
                    <List.Item.Meta
                        title={"MGLT"}
                        description={starship?.MGLT}
                    />
                    <List.Item.Meta
                        title={"Class"}
                        description={starship?.starship_class}
                    />
                </List.Item>
            </Panel>
        })
      }
    
  return (
    <Collapse>{renderStarshipData()}</Collapse>
  );
};

export default StarshipDetails;