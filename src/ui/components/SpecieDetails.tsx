import { Collapse, List } from "antd";
import { ISpecie } from "../../model/Specie";

const { Panel } = Collapse;

const SpecieDetails = ({ specieData }: {specieData: ISpecie[]}) => {

    const renderSpecieData = () => {
        return specieData?.map(specie => {
            return specie?.name && 
            <Panel header={specie?.name} key={specie?.name}>
                <List.Item>
                    <List.Item.Meta
                        title={"Classification"}
                        description={specie?.classification}
                    />
                    <List.Item.Meta
                        title={"Designation"}
                        description={specie?.designation}
                    />
                    <List.Item.Meta
                        title={"Average height"}
                        description={specie?.average_height}
                    />
                    
                    </List.Item>
                    <List.Item>
                    <List.Item.Meta
                        title={"Hair colors"}
                        description={specie?.hair_colors}
                    />
                    
                    <List.Item.Meta
                        title={"Average lifespan"}
                        description={specie?.average_lifespan}
                    />
                    <List.Item.Meta
                        title={"Language"}
                        description={specie?.language}
                    />
                </List.Item>
                <List.Item>
                    <List.Item.Meta
                        title={"Skin colors"}
                        description={specie?.skin_colors}
                    />
                    <List.Item.Meta
                        title={"Eye colors"}
                        description={specie?.eye_colors}
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
    <Collapse>{renderSpecieData()}</Collapse>
  );
};

export default SpecieDetails;