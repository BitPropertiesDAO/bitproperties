import { useState } from "react";
import { useParams } from "react-router";
import { DAORouter__factory as DAORouterFactory } from "../../../typechain";
import { ethers } from "ethers";
import { Input, InputNumber } from "antd";
import {
  AppHeader,
  InputGroup,
  InputSubheading,
} from "../../DaoManager/InputFormAlchemy";

export default function AddProperty() {
  const [tsxMessage, setTsxMessage] = useState<any>("");

  const [newProperty, setNewProperty] = useState<any>({
    propertyName: "",
    numberShares: 0,
    pricePerShare: 0,
  });

  let { DAORouterID } = useParams();
  const provider = new ethers.providers.JsonRpcProvider(
    "http://localhost:8545"
  );

  const signer = provider.getSigner();

  const handleLaunchNewProperty = async () => {
    if (newProperty.propertyName === "") {
      setTsxMessage("Details are Incomplete");
      return;
    }
    if (newProperty.numberShares === 0) {
      setTsxMessage("Details are Incomplete");
      return;
    }
    if (newProperty.pricePerShare === 0) {
      setTsxMessage("Details are Incomplete");
      return;
    }

    try {
      // @ts-ignore
      const router = DAORouterFactory.connect(DAORouterID, signer);

      const launchNewPropertyTsx = await router.launchNewProperty(
        newProperty.propertyName,
        newProperty.numberShares,
        newProperty.pricePerShare
      );
      const propertyReceipt = await launchNewPropertyTsx.wait();
      setTsxMessage(propertyReceipt.transactionHash);
    } catch (error) {
      console.log("launchNewPropertyError", error);
    }
  };
  return (
    <>
      <AppHeader>Add Property</AppHeader>
      <InputGroup>
        <InputSubheading>Property Name</InputSubheading>
        <div className="flex space--between">
          <Input
            value={newProperty.propertyName}
            onChange={(e: any) =>
              setNewProperty({
                propertyName: e.target.value,
                numberShares: newProperty.numberShares,
                pricePerShare: newProperty.pricePerShare,
              })
            }
            style={{ width: 200, margin: 20 }}
            className="alchemy--input"
            required
          ></Input>
          <div>{newProperty.propertyName}</div>
        </div>
        <InputSubheading>Number of Shares:</InputSubheading>
        <div className="flex space--between">
          <InputNumber
            value={newProperty.numberShares}
            onChange={(value: any) =>
              setNewProperty({
                propertyName: newProperty.propertyName,
                numberShares: value,
                pricePerShare: newProperty.pricePerShare,
              })
            }
            style={{ width: 200, margin: 20 }}
            className="alchemy--input"
            required
          ></InputNumber>
          <div>{newProperty.numberShares}</div>
        </div>
        <InputSubheading>Price Per Share</InputSubheading>
        <div className="flex space--between">
          <InputNumber
            value={newProperty.pricePerShare}
            onChange={(value: any) =>
              setNewProperty({
                propertyName: newProperty.propertyName,
                numberShares: newProperty.numberShares,
                pricePerShare: value,
              })
            }
            style={{ width: 200, margin: 20 }}
            className="alchemy--input"
            required
          ></InputNumber>
          <div>{newProperty.pricePerShare}</div>
        </div>
        <button
          style={{ marginTop: 30, marginBottom: 30, padding: 10 }}
          className="primary--button"
          onClick={handleLaunchNewProperty}
        >
          LaunchNewProperty
        </button>
        <div>{tsxMessage}</div>
      </InputGroup>
      You must have XXX to display add a property for minting
    </>
  );
}
