import React, { useEffect } from "react";
import { useParams } from "react-router";
import { DAORouter__factory as DAORouterFactory } from "../../typechain/factories/DAORouter__factory";
import { ethers } from "ethers";
import { useState } from "react";
import { Input, InputNumber } from "antd";
import { AppHeader } from "../DaoManager/InputFormAlchemy";
import DAOPageGrid from "./DAOPageGrid";
import "./daogridstyles.css";
import UpcomingProposals from "./UpcomingProposals";

export default function Profile() {
  const [propertyName, setPropertyName] = useState<any>();
  const [numberShares, setNumberShares] = useState<any>();
  const [pricePerShare, setPricePerShare] = useState<any>();

  const [tsxMessage, setTsxMessage] = useState<any>("");

  let { DAORouterID } = useParams();
  const provider = new ethers.providers.JsonRpcProvider(
    "http://localhost:8545"
  );
  const signer = provider.getSigner();

  const [DAOInformation, setDAOInformation] = useState({
    DAOName: "",
    governanceAddress: "",
    governanceTokenAddress: "",
  });

  useEffect(() => {
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
        propertyName,
        numberShares,
        pricePerShare
      );
      const propertyReceipt = await launchNewPropertyTsx.wait();
      setTsxMessage(propertyReceipt.transactionHash);
      // console.log("Property Launched", propertyReceipt);
      // const event = await propertyReceipt.events?.find(
      // (event: any) => event.event === "NewProperty"
      // );
      // const [daoPropertyAddress] = event?.args as any;
      // setPropertyContractAddress(daoPropertyAddress);
    } catch (error) {
      console.log("launchNewPropertyError", error);
    }
  };

  const { DAOName, governanceAddress, governanceTokenAddress } = DAOInformation;

  return (
    <>
      <AppHeader>{DAOName}</AppHeader>
      <div style={{ marginTop: 100 }} className="backboard daopage--backboard">
        <DAOPageGrid
          title1="Properties"
          result1={24}
          unit1="Listed"
          title2="Members"
          result2={1000}
          unit2="Investors"
          title3="Volume(24h)"
          result3={"460K"}
          unit3="Tokens"
          title4="Token Price"
          result4={1.31}
          unit4="$"
        ></DAOPageGrid>

        {/* <div>DAO ROUTER: {DAORouterID}</div>
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
          className="primary--button"
          onClick={handleLaunchNewProperty}
        >
          LaunchNewProperty
        </button>
        {tsxMessage && <div>TransactionHash: {tsxMessage}</div>} */}
      </div>
    </>
  );
}
