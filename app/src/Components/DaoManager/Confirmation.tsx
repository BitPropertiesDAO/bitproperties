import React, { useState } from "react";
import "./styles.css";
import { useAppSelector } from "../../utils/reduxhooks";
import { ethers, providers } from "ethers";
import { useWeb3React } from "@web3-react/core";
import { DAOFactoryAddress } from "../../contractsconfig";
import { DAOFactory__factory as DAOFactoryFactory } from "../../typechain/factories/DAOFactory__factory";
import { useNavigate } from "react-router";

const ConfirmationResult = (props: any) => {
  return (
    <div style={{ marginBottom: 40 }}>
      <h2 className="alchemy--section--subtitle" style={{ fontSize: "1.8rem" }}>
        {props.title}
      </h2>
      {props.children}
    </div>
  );
};

const Result2Column = (props: any) => {
  return (
    <div className="alchemy--confirmation" style={{ margin: "20px 0px" }}>
      <p>{props.resultTitle}:</p>
      <p className="alchemy--confirmation--result">{props.result}</p>
    </div>
  );
};

const Result3Column = (props: any) => {
  return (
    <div
      className="alchemy--confirmation wallet"
      style={{ margin: "20px 0px" }}
    >
      <p style={{ width: 215 }}>{props.wallet}</p>
      <p className="alchemy--confirmation--result">{props.address}</p>
      <p>{props.percentage}%</p>
    </div>
  );
};

export default function Confirmation() {
  let navigate = useNavigate();

  const [newDAOObject, setNewDAOObject] = useState({
    daoRouterAddress: "",
    daoTokenAddress: "",
    daoGovernorAddress: "",
  });

  const name = useAppSelector((state) => state.Alchemy.name);

  const inputs = useAppSelector((state) => {
    const governance = state.Alchemy;
    return governance;
  });

  const walletAddresses = useAppSelector((state) => {
    const walletAddresses = state.Alchemy.walletAddresses;
    return walletAddresses;
  });
  const walletPercentages = useAppSelector((state) => {
    const walletPercentages = state.Alchemy.walletPercentages;
    return walletPercentages;
  });

  const {
    AirDropAddress,
    LiquidityAddress,
    BurnAddress,
    RealEstateAddress,
    MarketingAddress,
    DeveloperAddress,
  } = walletAddresses;

  const { AirDropWallet, Liquidity, Burn, RealEstate, Marketing, Developer } =
    walletPercentages;

  let uniswapRouterAddress: string =
    "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
  const context = useWeb3React();
  const { library } = context;

  const provider = new ethers.providers.JsonRpcProvider(
    "http://localhost:8545"
  );

  const handleSubmit = async () => {
    try {
      const signer = provider.getSigner();

      console.log(provider);

      const factory = DAOFactoryFactory.connect(DAOFactoryAddress, signer);

      console.log(factory);
      const launchDAOTransaction = await factory.launchDAO(
        inputs.name,
        inputs.tokenName,
        inputs.tokenSymbol,
        inputs.initTokenSupply,
        {
          _airDropContractAddress: AirDropAddress,
          _burnWalletAddress: LiquidityAddress,
          _liquidityWalletAddress: BurnAddress,
          _realEstateWalletAddress: RealEstateAddress,
          _marketingWalletAddress: MarketingAddress,
          _developerWalletAddress: DeveloperAddress,
        },
        uniswapRouterAddress,
        {
          airdropPercent: AirDropWallet,
          liquidityPoolPercent: Liquidity,
          burnPercent: Burn,
          developerPercent: Developer,
          marketingPercent: Marketing,
        }
      );

      const contractReceipt = await launchDAOTransaction.wait();
      console.log("DAO Launched", contractReceipt);

      const event = await contractReceipt.events?.find(
        (event: any) => event.event === "NewDAO"
      );
      console.log("Event:", event);

      const [daoRouterAddress, daoTokenAddress, daoGovernorAddress] =
        event?.args as any;

      console.log(daoRouterAddress, daoTokenAddress, daoGovernorAddress);
      //  emit NewDAO(address(newDao), newDao.governanceTokenAddress(), newDao.governorAddress());

      setNewDAOObject({
        daoRouterAddress: daoRouterAddress,
        daoTokenAddress: daoTokenAddress,
        daoGovernorAddress: daoGovernorAddress,
      });
      console.log(newDAOObject);
    } catch (error) {
      console.log("launchDAO error", error);
    }
  };

  // const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <h1 className="alchemy--section--title">Confirmation</h1>
      <ConfirmationResult title="Basic Info">
        <Result2Column resultTitle="Dao Name" result={name}></Result2Column>
      </ConfirmationResult>

      {/* //////////////////////// //////////////////////// //////////////////////// //////////////////////// */}

      <ConfirmationResult title="Governance">
        <Result2Column
          resultTitle="Proposal Passing Percentage"
          result={`${inputs.proposalPassing} %`}
        ></Result2Column>
        <Result2Column
          resultTitle="Vote Duration"
          result={`${inputs.voteDurationWeeks} Weeks ${inputs.voteDurationDays} Days`}
        ></Result2Column>
      </ConfirmationResult>

      {/* //////////////////////// //////////////////////// //////////////////////// //////////////////////// */}

      <ConfirmationResult title="Tokenomics">
        <Result2Column
          resultTitle="Token Name"
          result={inputs.tokenName}
        ></Result2Column>
        <Result2Column
          resultTitle="Token Symbol"
          result={inputs.tokenSymbol}
        ></Result2Column>
        <Result2Column
          resultTitle="Initial Token Supply"
          result={inputs.initTokenSupply.toLocaleString()}
        ></Result2Column>
      </ConfirmationResult>

      {/* //////////////////////// //////////////////////// //////////////////////// //////////////////////// */}

      <ConfirmationResult title="Payouts">
        <Result3Column
          wallet="AirDrop Wallet"
          address={AirDropAddress}
          percentage={AirDropWallet}
        ></Result3Column>
        <Result3Column
          wallet="Liquidity Wallet"
          address={LiquidityAddress}
          percentage={Liquidity}
        ></Result3Column>
        <Result3Column
          wallet="Burn Wallet"
          address={BurnAddress}
          percentage={Burn}
        ></Result3Column>
        <Result3Column
          wallet="Real Estate Wallet"
          address={RealEstateAddress}
          percentage={RealEstate}
        ></Result3Column>
        <Result3Column
          wallet="Marketing Wallet"
          address={MarketingAddress}
          percentage={Marketing}
        ></Result3Column>
        <Result3Column
          wallet="Developer Wallet"
          address={DeveloperAddress}
          percentage={Developer}
        ></Result3Column>
      </ConfirmationResult>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button
          style={{ marginTop: 30, marginBottom: 30 }}
          className="primary--button"
          onClick={handleSubmit}
        >
          CREATE DAO
        </button>
      </div>
    </>
  );
}
