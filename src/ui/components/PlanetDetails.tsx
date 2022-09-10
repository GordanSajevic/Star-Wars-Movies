import { Collapse, List } from "antd";
import { IPlanet } from "../../model/Planet";

const { Panel } = Collapse;

const PlanetDetails = ({ planetData}: {planetData: IPlanet[]}) => {

    const renderPlanetData = () => {
        return planetData?.map(planet => {
            return planet?.name && 
            <Panel header={planet?.name} key={planet?.name}>
                <List.Item>
                    <List.Item.Meta
                        title={"Rotation period"}
                        description={planet?.rotation_period}
                    />
                    <List.Item.Meta
                        title={"Orbital period"}
                        description={planet?.orbital_period}
                    />
                    <List.Item.Meta
                        title={"Diameter"}
                        description={planet?.diameter}
                    />
                    </List.Item>
                    <List.Item>
                    <List.Item.Meta
                        title={"Climate"}
                        description={planet?.climate}
                    />
                    <List.Item.Meta
                        title={"Gravity"}
                        description={planet?.gravity}
                    />
                    <List.Item.Meta
                        title={"Terrain"}
                        description={planet?.terrain}
                    />
                </List.Item>
                <List.Item>
                    <List.Item.Meta
                        title={"Surface water"}
                        description={planet?.surface_water}
                    />
                    <List.Item.Meta
                        title={"Population"}
                        description={planet?.population}
                    />
                    <List.Item.Meta
                        title={""}
                        description={""}
                    />
                </List.Item>
            </Panel>
        })
    }

  return (
    <Collapse>{renderPlanetData()}</Collapse>
  );
};

export default PlanetDetails;