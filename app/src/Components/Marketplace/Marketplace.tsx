import React, { useEffect } from "react";
import { DAOFactoryAddress } from "../../contractsconfig";
import { DAOFactory__factory as DAOFactoryFactory } from "../../typechain/factories/DAOFactory__factory";
import { ethers } from "ethers";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Marketplace() {
  let navigate = useNavigate();
  const [numberDAOs, setNumberDAOs] = useState<any>();
  const [DAORouters, setDAORouters] = useState<any>([]);

  const provider = new ethers.providers.JsonRpcProvider(
    "http://localhost:8545"
  );

  const signer = provider.getSigner();
  const factory = DAOFactoryFactory.connect(DAOFactoryAddress, signer);
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
            <li
              onClick={() => navigate(`/app/DAO/${DAO}/Dashboard`)}
              key={index}
            >
              {DAO}
            </li>
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
      <div>Number of DAOs: {numberDAOs}</div>
      <ul>{DAORouters}</ul>
      <br />
      <br />
      <button
        className="primary--button"
        onClick={() => navigate(`/app/Alchemy/create`)}
      >
        Create DAO
      </button>
    </div>
  );
}
