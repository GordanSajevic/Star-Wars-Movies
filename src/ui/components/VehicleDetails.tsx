import { Collapse, List } from "antd";
import { IVehicle } from "../../model/Vehicle";

const { Panel } = Collapse;

const VehicleDetails = ({ vehicleData }: {vehicleData: IVehicle[]}) => {

    const renderVehicleData = () => {
        return vehicleData?.map(vehicle => {
            return vehicle?.name && 
            <Panel header={vehicle?.name} key={vehicle?.name}>
                <List.Item>
                    <List.Item.Meta
                        title={"Model"}
                        description={vehicle?.model}
                    />
                    <List.Item.Meta
                        title={"Manufacturer"}
                        description={vehicle?.manufacturer}
                    />
                    <List.Item.Meta
                        title={"Cost"}
                        description={vehicle?.cost_in_credits}
                    />
                    </List.Item>
                    <List.Item>
                    <List.Item.Meta
                        title={"Length"}
                        description={vehicle?.length}
                    />
                    <List.Item.Meta
                        title={"Max speed"}
                        description={vehicle?.max_atmosphering_speed}
                    />
                    <List.Item.Meta
                        title={"Crew"}
                        description={vehicle?.crew}
                    />
                </List.Item>
                <List.Item>
                    <List.Item.Meta
                        title={"Passengers"}
                        description={vehicle?.passengers}
                    />
                    <List.Item.Meta
                        title={"Cargo capacity"}
                        description={vehicle?.cargo_capacity}
                    />
                    <List.Item.Meta
                        title={"Consumables"}
                        description={vehicle?.consumables}
                    />
                    
                </List.Item>
                <List.Item>
                    <List.Item.Meta
                        title={"Hyperdrive rating"}
                        description={vehicle?.vehicle_class}
                    />
                </List.Item>
            </Panel>
        })
      }    

  return (
    <Collapse>{renderVehicleData()}</Collapse>
  );
};

export default VehicleDetails;