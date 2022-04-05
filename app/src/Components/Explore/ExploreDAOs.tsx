import React, { useState, useEffect } from "react";
import { DAOFactoryAddress } from "../../contractsconfig";
import { DAOFactory__factory as DAOFactoryFactory } from "../../typechain/factories/DAOFactory__factory";
import { useNavigate } from "react-router";
import { ethers } from "ethers";
import { AppHeader } from "../DaoManager/InputFormAlchemy";

export default function ExploreDAOs() {
  const [numberDAOs, setNumberDAOs] = useState<any>();
  const [DAORouters, setDAORouters] = useState<any>([]);

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
            <div
              onClick={() => navigate(`/app/DAO/${DAO}/Dashboard`)}
              key={index}
            >
              {DAO}
            </div>
          );
        });
        return DAOElements;
      })
      .then((DAOElements) => {
        setDAORouters(DAOElements);
      });
  }, []);

  return (
    <div>
      <AppHeader>Number of DAOs: {numberDAOs}</AppHeader>
      <div>{DAORouters}</div>
    </div>
  );
}
