import React, { useState, useEffect } from "react";
import { DAOFactoryAddress } from "../../contractsconfig";
import { DAOFactory__factory as DAOFactoryFactory } from "../../typechain/factories/DAOFactory__factory";
import { useNavigate } from "react-router";
import { ethers } from "ethers";
import { AppHeader } from "../DaoManager/InputFormAlchemy";
import DAOIcon from "../../static/DAO-Icon.jpg";
import DAOCard from "./DAOCard";
import "./styles.css";
import PropertyCard from "../DAO/Property/PropertyCard";

export default function ExploreDAOs() {
  const [numberDAOs, setNumberDAOs] = useState<any>();
  const [DAORouters, setDAORouters] = useState<any>([]);

  const [lookupAddress, setLookupAddress] = useState<string>("");

  const provider = new ethers.providers.JsonRpcProvider(
    "http://localhost:8545"
  );

  const signer = provider.getSigner();
  const factory = DAOFactoryFactory.connect(DAOFactoryAddress, signer);
  let navigate = useNavigate();

  useEffect(() => {
    let DAORouterArray: any = [];
    const getMarket = async () => {
      let DAOCounterNumber: any;
      try {
        const DAOCounter = await factory.daoCounter();
        DAOCounterNumber = DAOCounter.toNumber();
      } catch (error) {
        console.log(error);
      }
      setNumberDAOs(DAOCounterNumber);
      return DAOCounterNumber;
    };
    getMarket()
      .then(async (numberOfDAOs) => {
        for (let i = 0; i < numberOfDAOs; i++) {
          let DAO = await factory.DAOs(i);
          console.log(DAO);
          DAORouterArray.push(DAO);
        }
        return DAORouterArray;
      })
      .then((DAORouterArray) => {
        const DAOElements = DAORouterArray.map((DAO: any, index: any) => {
          return (
            <DAOCard
              image={DAOIcon}
              key={index}
              navigateTo={`/app/DAO/${DAO}/Dashboard`}
              DAORouter={DAO}
            ></DAOCard>
          );
        });
        return DAOElements;
      })
      .then((DAOElements) => {
        setDAORouters(DAOElements);
      });
  }, []);

  const handleLookUpAddress = (e: any, address: any) => {
    e.preventDefault();
    navigate(`/app/DAO/${address}/Dashboard`);
  };

  return (
    <>
      <div className="backboard">
        <div className="property--grid headings">
          <div className="heading--item grid--title">DAOs: {numberDAOs}</div>
          <div className="heading--item">Name</div>
          <div className="heading--item">Assets Listed</div>
          <div className="heading--item">Statistic</div>
          <div className="heading--item">Address</div>
        </div>
        <div className="display--grid">{DAORouters}</div>
        <form onSubmit={(e) => handleLookUpAddress(e, lookupAddress)}>
          <label>
            Search by address:
            <input
              style={{ color: "black" }}
              value={lookupAddress}
              onChange={(e) => setLookupAddress(e.target.value)}
            ></input>
          </label>
          <button type="submit">Look Up</button>
        </form>
      </div>
    </>
  );
}
