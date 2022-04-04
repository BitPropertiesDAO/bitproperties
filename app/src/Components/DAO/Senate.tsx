import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { DAOToken__factory as DAOToken } from "../../typechain";
import { ethers } from "ethers";

export default function Senate() {
  const [daoTokenInfo, setDaoTokenInfo] = useState<any>({
    totalSupply: "",
    tokenSymbol: "",
    tokenName: "",
    uniSwapRouterAddress: "",
  });

  const { DAOGovernanceToken } = useParams();
  const provider = new ethers.providers.JsonRpcProvider(
    "http://localhost:8545"
  );
  const signer = provider.getSigner();

  // @ts-ignore
  const Token = DAOToken.connect(DAOGovernanceToken, signer);

  useEffect(() => {
    const getTokenInfo = async () => {
      const readTotalSupply = await Token.totalSupply();
      const readTokenSymbol = await Token.symbol();
      const readTokenName = await Token.name();
      const readuniswapRouterAddress = await Token.uniswapRouterAddress();

      setDaoTokenInfo({
        totalSupply: readTotalSupply.toNumber().toLocaleString(),
        tokenName: readTokenName,
        tokenSymbol: readTokenSymbol,
        uniswapRouterAddress: readuniswapRouterAddress,
      });
    };
    getTokenInfo();
  }, []);

  return (
    <>
      <div>Senate: {DAOGovernanceToken}</div>
      <div>TotalSupply: {daoTokenInfo.totalSupply}</div>
      <div>Token Name: {daoTokenInfo.tokenName}</div>
      <div>Token Symbol: {daoTokenInfo.tokenSymbol}</div>
      <div>UniSwapRouterAddress: {daoTokenInfo.uniSwapRouterAddress}</div>
    </>
  );
}
