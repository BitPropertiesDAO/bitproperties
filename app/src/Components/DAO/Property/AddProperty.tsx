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
import ethPrice from "../../../placeholderData";

export default function AddProperty() {
  const [tsxMessage, setTsxMessage] = useState<any>("");

  const [newProperty, setNewProperty] = useState<any>({
    propertyName: "",
    numberShares: 0,
    totalPropertyValue: 0,
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
    if (newProperty.totalPropertyValue === 0) {
      setTsxMessage("Details are Incomplete");
      return;
    }

    try {
      // @ts-ignore
      const router = DAORouterFactory.connect(DAORouterID, signer);

      const launchNewPropertyTsx = await router.launchNewProperty(
        newProperty.propertyName,
        newProperty.numberShares,
        (newProperty.totalPropertyValue * 10 ** 9) / newProperty.numberShares
      );
      const propertyReceipt = await launchNewPropertyTsx.wait();
      setTsxMessage(propertyReceipt.transactionHash);
    } catch (error) {
      console.log("launchNewPropertyError", error);
    }
  };
  return (
    <>
      <div className="backboard">
        <AppHeader>Add Property</AppHeader>
        {/* <InputGroup> */}
        <InputSubheading>Property Name</InputSubheading>
        <div className="flex space--between">
          <Input
            value={newProperty.propertyName}
            onChange={(e: any) =>
              setNewProperty({
                propertyName: e.target.value,
                numberShares: newProperty.numberShares,
                totalPropertyValue: newProperty.totalPropertyValue,
              })
            }
            style={{ width: 200, margin: 20 }}
            className="alchemy--input"
            required
          ></Input>
          <div>{newProperty.propertyName}</div>
        </div>
        <InputSubheading>Total Property Value (ETH)</InputSubheading>
        <div className="flex space--between">
          <InputNumber
            value={newProperty.totalPropertyValue}
            onChange={(value: any) =>
              setNewProperty({
                propertyName: newProperty.propertyName,
                numberShares: newProperty.numberShares,
                totalPropertyValue: value,
              })
            }
            style={{ width: 200, margin: 20 }}
            className="alchemy--input"
            required
          ></InputNumber>
          <div>
            {newProperty.totalPropertyValue}ETH ≈{" "}
            {(newProperty.totalPropertyValue * ethPrice).toLocaleString()} USD
          </div>
        </div>
        <InputSubheading>Number of Shares:</InputSubheading>
        <div className="flex space--between">
          <InputNumber
            value={newProperty.numberShares}
            onChange={(value: any) =>
              setNewProperty({
                propertyName: newProperty.propertyName,
                numberShares: value,
                totalPropertyValue: newProperty.totalPropertyValue,
              })
            }
            style={{ width: 200, margin: 20 }}
            className="alchemy--input"
            required
          ></InputNumber>
          <div>{newProperty.numberShares}</div>
        </div>
        <div>
          Value Per Share ={" "}
          {newProperty.totalPropertyValue / newProperty.numberShares} ETH ≈{" "}
          {(newProperty.totalPropertyValue * ethPrice) /
            newProperty.numberShares}{" "}
          USD
          <br />
          {/* {(
            (newProperty.totalPropertyValue * 10 ** 18) /
            newProperty.numberShares
          ).toLocaleString()}{" "}
          WEI */}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <button
            style={{ marginTop: 30, marginBottom: 30, padding: 10 }}
            className="primary--button"
            onClick={handleLaunchNewProperty}
          >
            LaunchNewProperty
          </button>
        </div>
        <div style={{ color: "#17f73c" }}>{tsxMessage}</div>
        {/* </InputGroup> */}* You must have XXX to add a property proposal
      </div>
    </>
  );
}
