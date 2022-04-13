import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { DAOToken__factory as DAOToken } from "../../typechain";
import { DAOGovernor__factory as DAOGovernor } from "../../typechain";
import { DAORouter__factory as DAORouter } from "../../typechain";
import { ethers } from "ethers";
import { AppHeader } from "../DaoManager/InputFormAlchemy";

export default function Senate() {
  const [daoTokenInfo, setDaoTokenInfo] = useState<any>({
    totalSupply: "",
    tokenSymbol: "",
    tokenName: "",
    uniSwapRouterAddress: "",
  });

  const [DAOInfo, setDAOInfo] = useState<any>({
    daoName: "",
    governorAddress: "",
  });

  const { DAOGovernanceToken, DAORouterID } = useParams();

  const provider = new ethers.providers.JsonRpcProvider(
    "http://localhost:8545"
  );
  const signer = provider.getSigner();

  // @ts-ignore
  const Token = DAOToken.connect(DAOGovernanceToken, signer);
  // @ts-ignore
  const Router = DAORouter.connect(DAORouterID, signer);

  useEffect(() => {
    const getTokenInfo = async () => {
      const readTotalSupply = await Token.totalSupply();
      const readTokenSymbol = await Token.symbol();
      const readTokenName = await Token.name();

      setDaoTokenInfo({
        totalSupply: readTotalSupply.toNumber().toLocaleString(),
        tokenName: readTokenName,
        tokenSymbol: readTokenSymbol,
        // governorAddress: readDAOGovernorAddress,
      });
    };
    getTokenInfo();

    const getDAOInfo = async () => {
      const readDAOName = await Router.daoName();
      const readDAOGovernorAddress = await Router.governorAddress();
      setDAOInfo({
        daoName: readDAOName,
        governorAddress: readDAOGovernorAddress,
      });
    };
    getDAOInfo();
  }, []);

  return (
    <>
      <div className="backboard daopage--backboard">
        <AppHeader>Governance</AppHeader>
        <div>Governance Token Address: {DAOGovernanceToken}</div>
        <div>TotalSupply: {daoTokenInfo.totalSupply}</div>
        <div>Token Name: {daoTokenInfo.tokenName}</div>
        <div>Token Symbol: {daoTokenInfo.tokenSymbol}</div>
        <div>DAO Governor Address: {DAOInfo.governorAddress}</div>
      </div>
    </>
  );
}
