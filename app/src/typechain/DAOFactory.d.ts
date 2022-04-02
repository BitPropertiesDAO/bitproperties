/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface DAOFactoryInterface extends ethers.utils.Interface {
  functions: {
    "DAOs(uint256)": FunctionFragment;
    "daoCounter()": FunctionFragment;
    "daoRouters(address)": FunctionFragment;
    "launchDAO(string,string,string,uint256,tuple,address,tuple)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "DAOs", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "daoCounter",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "daoRouters", values: [string]): string;
  encodeFunctionData(
    functionFragment: "launchDAO",
    values: [
      string,
      string,
      string,
      BigNumberish,
      {
        _airDropContractAddress: string;
        _burnWalletAddress: string;
        _liquidityWalletAddress: string;
        _realEstateWalletAddress: string;
        _marketingWalletAddress: string;
        _developerWalletAddress: string;
      },
      string,
      {
        airdropPercent: BigNumberish;
        liquidityPoolPercent: BigNumberish;
        burnPercent: BigNumberish;
        developerPercent: BigNumberish;
        marketingPercent: BigNumberish;
      }
    ]
  ): string;

  decodeFunctionResult(functionFragment: "DAOs", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "daoCounter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "daoRouters", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "launchDAO", data: BytesLike): Result;

  events: {
    "NewDAO(address,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewDAO"): EventFragment;
}

export type NewDAOEvent = TypedEvent<
  [string, string, string] & {
    daoAddress: string;
    tokenAddress: string;
    governorAddress: string;
  }
>;

export class DAOFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: DAOFactoryInterface;

  functions: {
    DAOs(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    daoCounter(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _value: BigNumber }>;

    daoRouters(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string] & {
        governanceTokenAddress: string;
        governorAddress: string;
      }
    >;

    launchDAO(
      _daoName: string,
      _tokenName: string,
      _tokenSymbol: string,
      _initialSupply: BigNumberish,
      _addresses: {
        _airDropContractAddress: string;
        _burnWalletAddress: string;
        _liquidityWalletAddress: string;
        _realEstateWalletAddress: string;
        _marketingWalletAddress: string;
        _developerWalletAddress: string;
      },
      _uniswapRouterAddress: string,
      _percentages: {
        airdropPercent: BigNumberish;
        liquidityPoolPercent: BigNumberish;
        burnPercent: BigNumberish;
        developerPercent: BigNumberish;
        marketingPercent: BigNumberish;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  DAOs(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  daoCounter(overrides?: CallOverrides): Promise<BigNumber>;

  daoRouters(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [string, string] & {
      governanceTokenAddress: string;
      governorAddress: string;
    }
  >;

  launchDAO(
    _daoName: string,
    _tokenName: string,
    _tokenSymbol: string,
    _initialSupply: BigNumberish,
    _addresses: {
      _airDropContractAddress: string;
      _burnWalletAddress: string;
      _liquidityWalletAddress: string;
      _realEstateWalletAddress: string;
      _marketingWalletAddress: string;
      _developerWalletAddress: string;
    },
    _uniswapRouterAddress: string,
    _percentages: {
      airdropPercent: BigNumberish;
      liquidityPoolPercent: BigNumberish;
      burnPercent: BigNumberish;
      developerPercent: BigNumberish;
      marketingPercent: BigNumberish;
    },
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    DAOs(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    daoCounter(overrides?: CallOverrides): Promise<BigNumber>;

    daoRouters(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string] & {
        governanceTokenAddress: string;
        governorAddress: string;
      }
    >;

    launchDAO(
      _daoName: string,
      _tokenName: string,
      _tokenSymbol: string,
      _initialSupply: BigNumberish,
      _addresses: {
        _airDropContractAddress: string;
        _burnWalletAddress: string;
        _liquidityWalletAddress: string;
        _realEstateWalletAddress: string;
        _marketingWalletAddress: string;
        _developerWalletAddress: string;
      },
      _uniswapRouterAddress: string,
      _percentages: {
        airdropPercent: BigNumberish;
        liquidityPoolPercent: BigNumberish;
        burnPercent: BigNumberish;
        developerPercent: BigNumberish;
        marketingPercent: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<[string, string, string]>;
  };

  filters: {
    "NewDAO(address,address,address)"(
      daoAddress?: null,
      tokenAddress?: null,
      governorAddress?: null
    ): TypedEventFilter<
      [string, string, string],
      { daoAddress: string; tokenAddress: string; governorAddress: string }
    >;

    NewDAO(
      daoAddress?: null,
      tokenAddress?: null,
      governorAddress?: null
    ): TypedEventFilter<
      [string, string, string],
      { daoAddress: string; tokenAddress: string; governorAddress: string }
    >;
  };

  estimateGas: {
    DAOs(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    daoCounter(overrides?: CallOverrides): Promise<BigNumber>;

    daoRouters(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    launchDAO(
      _daoName: string,
      _tokenName: string,
      _tokenSymbol: string,
      _initialSupply: BigNumberish,
      _addresses: {
        _airDropContractAddress: string;
        _burnWalletAddress: string;
        _liquidityWalletAddress: string;
        _realEstateWalletAddress: string;
        _marketingWalletAddress: string;
        _developerWalletAddress: string;
      },
      _uniswapRouterAddress: string,
      _percentages: {
        airdropPercent: BigNumberish;
        liquidityPoolPercent: BigNumberish;
        burnPercent: BigNumberish;
        developerPercent: BigNumberish;
        marketingPercent: BigNumberish;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DAOs(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    daoCounter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    daoRouters(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    launchDAO(
      _daoName: string,
      _tokenName: string,
      _tokenSymbol: string,
      _initialSupply: BigNumberish,
      _addresses: {
        _airDropContractAddress: string;
        _burnWalletAddress: string;
        _liquidityWalletAddress: string;
        _realEstateWalletAddress: string;
        _marketingWalletAddress: string;
        _developerWalletAddress: string;
      },
      _uniswapRouterAddress: string,
      _percentages: {
        airdropPercent: BigNumberish;
        liquidityPoolPercent: BigNumberish;
        burnPercent: BigNumberish;
        developerPercent: BigNumberish;
        marketingPercent: BigNumberish;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}