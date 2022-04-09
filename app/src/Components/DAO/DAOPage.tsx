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
    propertyCounter: 0,
  });

  useEffect(() => {
    // @ts-ignore
    const router = DAORouterFactory.connect(DAORouterID, signer);

    const getDAOInfo = async () => {
      try {
        const ReacDAOName = await router.daoName();
        const ReadDAOPropertyCounter = await router.propertyCounter();
        setDAOInformation({
          DAOName: ReacDAOName,
          propertyCounter: ReadDAOPropertyCounter.toNumber(),
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
    } catch (error) {
      console.log("launchNewPropertyError", error);
    }
  };

  const { DAOName } = DAOInformation;

  return (
    <>
      <AppHeader>{DAOName}</AppHeader>
      <div style={{ marginTop: 100 }} className="backboard daopage--backboard">
        <DAOPageGrid
          title1="Properties"
          result1={DAOInformation.propertyCounter}
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
        <UpcomingProposals></UpcomingProposals>
      </div>
    </>
  );
}
