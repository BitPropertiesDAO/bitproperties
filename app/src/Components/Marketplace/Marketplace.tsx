import React from "react";
import { DAOFactoryAddress } from "../../contractsconfig";
import { DAOFactory__factory as DAOFactoryFactory } from "../../typechain/factories/DAOFactory__factory";
import { ethers } from "ethers";

export default function Marketplace() {
  const provider = new ethers.providers.JsonRpcProvider(
    "http://localhost:8545"
  );
  const signer = provider.getSigner();

  const getMarket = async () => {
    // @ts-ignore
    const router = DAOFactoryFactory.connect(DAOFactoryAddress, signer);

    try {
      const DAOs = await router.daoRouters(
        "0x5bc3C307D7831d9155F7030df95a4b3c5d7b9288"
      );
      console.log(DAOs);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={getMarket}>MARKETPLACE</button>
    </div>
  );
}
