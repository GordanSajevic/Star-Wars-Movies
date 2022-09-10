import { Collapse, List } from "antd";
import { ICharacter } from "../../model/Character";

const { Panel } = Collapse;

const CharacterDetails = ({ characterData}: {characterData: ICharacter[]}) => {

    const renderCharacterData = () => {
        return characterData?.map(character => {
            return character?.name && 
            <Panel header={character?.name} key={character?.name}>
                <List.Item>
                    <List.Item.Meta
                        title={"Height"}
                        description={character?.height}
                    />
                    <List.Item.Meta
                        title={"Mass"}
                        description={character?.mass}
                    />
                    <List.Item.Meta
                        title={"Hair color"}
                        description={character?.hair_color}
                    />
                    <List.Item.Meta
                        title={"Eye color"}
                        description={character?.eye_color}
                    />
                    </List.Item>
                    <List.Item>
                    <List.Item.Meta
                        title={"Skin color"}
                        description={character?.skin_color}
                    />
                    <List.Item.Meta
                        title={"Birth year"}
                        description={character?.birth_year}
                    />
                    <List.Item.Meta
                        title={"Gender"}
                        description={character?.gender}
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
    <Collapse>{renderCharacterData()}</Collapse>
  );
};

export default CharacterDetails;