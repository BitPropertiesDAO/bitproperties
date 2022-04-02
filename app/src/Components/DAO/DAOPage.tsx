import React, { useEffect } from "react";
import { useParams } from "react-router";
import { DAORouter__factory as DAORouterFactory } from "../../typechain/factories/DAORouter__factory";
import { ethers } from "ethers";
import { useState } from "react";
import { Input, InputNumber } from "antd";

export default function Profile() {
  const [propertyName, setPropertyName] = useState();
  const [numberShares, setNumberShares] = useState();
  const [pricePerShare, setPricePerShare] = useState();

  const [propertyContractAddress, setPropertyContractAddress] = useState("");

  let { DAORouterID } = useParams();
  const provider = new ethers.providers.JsonRpcProvider(
    "http://localhost:8545"
  );

  const [DAOInformation, setDAOInformation] = useState({
    DAOName: "",
    governanceAddress: "",
    governanceTokenAddress: "",
  });

  useEffect(() => {
    const signer = provider.getSigner();
    // @ts-ignore
    const router = DAORouterFactory.connect(DAORouterID, signer);

    const getDAOInfo = async () => {
      try {
        const ReacDAOName = await router.daoName();
        const ReadDAOGovernorAddress = await router.governorAddress();
        const ReadDAOGovernanceTokenAddress =
          await router.governanceTokenAddress();
        setDAOInformation({
          DAOName: ReacDAOName,
          governanceAddress: ReadDAOGovernorAddress,
          governanceTokenAddress: ReadDAOGovernanceTokenAddress,
        });
      } catch (e) {
        console.log(e);
      }
    };

    getDAOInfo();
  }, []);

  const handleLaunchNewProperty = async () => {
    try {
      const signer = provider.getSigner();
      // @ts-ignore
      const router = DAORouterFactory.connect(DAORouterID, signer);

      const launchNewPropertyTsx = await router.launchNewProperty(
        // @ts-ignore
        propertyName,
        numberShares,
        pricePerShare
      );

      const propertyReceipt = await launchNewPropertyTsx.wait();
      console.log("Property Launched", propertyReceipt);

      const event = await propertyReceipt.events?.find(
        (event: any) => event.event === "NewProperty"
      );

      // console.log("Event:", event);

      const [daoPropertyAddress] = event?.args as any;

      setPropertyContractAddress(daoPropertyAddress);
    } catch (error) {
      console.log("launchNewPropertyError", error);
    }
  };

  const { DAOName, governanceAddress, governanceTokenAddress } = DAOInformation;

  return (
    <>
      <div>DAO ROUTER: {DAORouterID}</div>
      <div>DAO Name: {DAOName}</div>
      <div>Governor Address: {governanceAddress}</div>
      <div>Governance Token Address: {governanceTokenAddress}</div>
      Name:
      <Input
        value={propertyName}
        onChange={(e: any) => setPropertyName(e.target.value)}
        style={{ width: 200, margin: 20 }}
      ></Input>
      <div>ProeprtyName: {propertyName}</div>
      Number of Shares:
      <InputNumber
        value={numberShares}
        onChange={(value: any) => setNumberShares(value)}
        style={{ width: 200, margin: 20 }}
      ></InputNumber>
      <div>ProeprtyName: {numberShares}</div>
      Price per Share
      <InputNumber
        value={pricePerShare}
        onChange={(value: any) => setPricePerShare(value)}
        style={{ width: 200, margin: 20 }}
      ></InputNumber>
      <div>ProeprtyName: {pricePerShare}</div>
      <button
        style={{ marginTop: 30, marginBottom: 30, padding: 10 }}
        className="header--nav--actionbutton"
        onClick={handleLaunchNewProperty}
      >
        LaunchNewProperty
      </button>
      <div>Property Contract Address: {propertyContractAddress}</div>
    </>
  );
}
