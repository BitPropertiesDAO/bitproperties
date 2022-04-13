import React, { useEffect } from "react";
import { useParams } from "react-router";
import { DAORouter__factory as DAORouterFactory } from "../../typechain/factories/DAORouter__factory";
import { ethers } from "ethers";
import { useState } from "react";
import { AppHeader } from "../DaoManager/InputFormAlchemy";
import DisplayGridTwo from "./DisplayGridTwo";
import "./daogridstyles.css";
import UpcomingProposals from "./UpcomingProposals";

export default function Profile() {
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

  const { DAOName } = DAOInformation;

  return (
    <>
      <div className="backboard">
        <AppHeader>{DAOName}</AppHeader>
        <DisplayGridTwo
          title1="Properties"
          result1={DAOInformation.propertyCounter}
          unit1="Listed"
          title2="Members"
          result2={1}
          unit2="Investors"
        ></DisplayGridTwo>
        <DisplayGridTwo
          title1="Volume(24h)"
          result1={"0K"}
          unit1="Tokens"
          title2="Governance Token Price"
          result2={0.0}
          unit2="$"
        ></DisplayGridTwo>
        <UpcomingProposals></UpcomingProposals>
      </div>
    </>
  );
}
