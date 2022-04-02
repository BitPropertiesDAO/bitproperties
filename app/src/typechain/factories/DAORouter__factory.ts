/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { DAORouter, DAORouterInterface } from "../DAORouter";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_daoName",
        type: "string",
      },
      {
        internalType: "address",
        name: "_governorAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "propertyAddress",
        type: "address",
      },
    ],
    name: "NewProperty",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "Properties",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "daoName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "daoProperties",
    outputs: [
      {
        internalType: "contract Property",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "governanceTokenAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "governorAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_propertyName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_numShares",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_pricePerShare",
        type: "uint256",
      },
    ],
    name: "launchNewProperty",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "propertyCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405162002ca138038062002ca18339810160408190526100319161012c565b8251610044906000906020860190610077565b50600180546001600160a01b039384166001600160a01b031991821617909155600280549290931691161790555061026f565b8280546100839061021e565b90600052602060002090601f0160209004810192826100a557600085556100eb565b82601f106100be57805160ff19168380011785556100eb565b828001600101855582156100eb579182015b828111156100eb5782518255916020019190600101906100d0565b506100f79291506100fb565b5090565b5b808211156100f757600081556001016100fc565b80516001600160a01b038116811461012757600080fd5b919050565b60008060006060848603121561014157600080fd5b83516001600160401b038082111561015857600080fd5b818601915086601f83011261016c57600080fd5b81518181111561017e5761017e610259565b604051601f8201601f19908116603f011681019083821181831017156101a6576101a6610259565b816040528281526020935089848487010111156101c257600080fd5b600091505b828210156101e457848201840151818301850152908301906101c7565b828211156101f55760008484830101525b9650610205915050868201610110565b9350505061021560408501610110565b90509250925092565b600181811c9082168061023257607f821691505b6020821081141561025357634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b612a22806200027f6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80639d1168841161005b5780639d11688414610117578063b42165d01461012a578063c4161f331461014a578063d090e47e1461015f57600080fd5b8063276f1c4114610082578063465c1309146100cc5780634897693614610102575b600080fd5b6001546100a29073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100a26100da36600461037b565b60036020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b61010a610177565b6040516100c391906104b3565b6100a261012536600461049a565b610205565b6002546100a29073ffffffffffffffffffffffffffffffffffffffff1681565b61015d6101583660046103b8565b61023c565b005b6005546101699081565b6040519081526020016100c3565b6000805461018490610526565b80601f01602080910402602001604051908101604052809291908181526020018280546101b090610526565b80156101fd5780601f106101d2576101008083540402835291602001916101fd565b820191906000526020600020905b8154815290600101906020018083116101e057829003601f168201915b505050505081565b6004818154811061021557600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b6000818360405161024c9061036e565b606080825260009082015260208101929092526040820152608001604051809103906000f080158015610283573d6000803e3d6000fd5b5060405173ffffffffffffffffffffffffffffffffffffffff821681529091507f17bd5592782711530f5d0fe25908262051b8aaf17e1a697141c0f1c751f09d3a9060200160405180910390a173ffffffffffffffffffffffffffffffffffffffff8116600081815260036020526040812080547fffffffffffffffffffffffff000000000000000000000000000000000000000090811684179091556004805460018101825592527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b90910180549091169091179055610368600580546001019055565b50505050565b612443806105aa83390190565b60006020828403121561038d57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146103b157600080fd5b9392505050565b6000806000606084860312156103cd57600080fd5b833567ffffffffffffffff808211156103e557600080fd5b818601915086601f8301126103f957600080fd5b81358181111561040b5761040b61057a565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019083821181831017156104515761045161057a565b8160405282815289602084870101111561046a57600080fd5b82602086016020830137600060208483010152809750505050505060208401359150604084013590509250925092565b6000602082840312156104ac57600080fd5b5035919050565b600060208083528351808285015260005b818110156104e0578581018301518582016040015282016104c4565b818111156104f2576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b600181811c9082168061053a57607f821691505b60208210811415610574577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfe608060405260006003553480156200001657600080fd5b506040516200244338038062002443833981016040819052620000399162000115565b82620000458162000056565b506006919091556007555062000258565b80516200006b9060029060208401906200006f565b5050565b8280546200007d9062000205565b90600052602060002090601f016020900481019282620000a15760008555620000ec565b82601f10620000bc57805160ff1916838001178555620000ec565b82800160010185558215620000ec579182015b82811115620000ec578251825591602001919060010190620000cf565b50620000fa929150620000fe565b5090565b5b80821115620000fa5760008155600101620000ff565b6000806000606084860312156200012b57600080fd5b83516001600160401b03808211156200014357600080fd5b818601915086601f8301126200015857600080fd5b8151818111156200016d576200016d62000242565b604051601f8201601f19908116603f0116810190838211818310171562000198576200019862000242565b81604052828152602093508984848701011115620001b557600080fd5b600091505b82821015620001d95784820184015181830185015290830190620001ba565b82821115620001eb5760008484830101525b928801516040909801519299979850919695505050505050565b600181811c908216806200021a57607f821691505b602082108114156200023c57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6121db80620002686000396000f3fe6080604052600436106101275760003560e01c80634e1273f4116100a5578063a0712d6811610074578063a238423611610059578063a238423614610331578063e985e9c514610351578063f242432a1461039a57600080fd5b8063a0712d68146102fe578063a22cb4651461031157600080fd5b80634e1273f41461025257806365d96c821461027f578063744bfe61146102c857806399530b06146102e857600080fd5b80630e89341c116100fc5780632eb2c2d6116100e15780632eb2c2d614610209578063342d6d32146102295780633a98ef391461023c57600080fd5b80630e89341c146101c657806323b7c646146101f357600080fd5b80625c33e11461012c578062fdd58e1461013657806301ffc9a71461016957806303fc8d2b14610199575b600080fd5b6101346103ba565b005b34801561014257600080fd5b50610156610151366004611bf3565b610468565b6040519081526020015b60405180910390f35b34801561017557600080fd5b50610189610184366004611cf2565b610514565b6040519015158152602001610160565b3480156101a557600080fd5b506101566101b4366004611a53565b60056020526000908152604090205481565b3480156101d257600080fd5b506101e66101e1366004611d2c565b6105f7565b6040516101609190611ef6565b3480156101ff57600080fd5b5061015660085481565b34801561021557600080fd5b50610134610224366004611aa9565b61068b565b610134610237366004611bf3565b61072d565b34801561024857600080fd5b5061015660075481565b34801561025e57600080fd5b5061027261026d366004611c1f565b610999565b6040516101609190611eb5565b34801561028b57600080fd5b506102b361029a366004611a53565b6004602052600090815260409020805460019091015482565b60408051928352602083019190915201610160565b3480156102d457600080fd5b506101346102e3366004611d45565b610ad7565b3480156102f457600080fd5b5061015660065481565b61013461030c366004611d2c565b610b95565b34801561031d57600080fd5b5061013461032c366004611bc0565b610c8c565b34801561033d57600080fd5b5061013461034c366004611d6a565b610c97565b34801561035d57600080fd5b5061018961036c366004611a70565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b3480156103a657600080fd5b506101346103b5366004611b57565b610d89565b60005b6103c76009610e24565b8110156104655760006103db600983610e2e565b905060006103eb82600354610468565b905080156104505760006104143461040e60085485610e4190919063ffffffff16565b90610e4d565b6040519091506001600160a01b0384169082156108fc029083906000818181858888f1935050505015801561044d573d6000803e3d6000fd5b50505b5050808061045d90612023565b9150506103bd565b50565b60006001600160a01b0383166104eb5760405162461bcd60e51b815260206004820152602b60248201527f455243313135353a2062616c616e636520717565727920666f7220746865207a60448201527f65726f206164647265737300000000000000000000000000000000000000000060648201526084015b60405180910390fd5b506000818152602081815260408083206001600160a01b03861684529091529020545b92915050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167fd9b67a260000000000000000000000000000000000000000000000000000000014806105a757507fffffffff0000000000000000000000000000000000000000000000000000000082167f0e89341c00000000000000000000000000000000000000000000000000000000145b8061050e57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff0000000000000000000000000000000000000000000000000000000083161461050e565b60606002805461060690611fbb565b80601f016020809104026020016040519081016040528092919081815260200182805461063290611fbb565b801561067f5780601f106106545761010080835404028352916020019161067f565b820191906000526020600020905b81548152906001019060200180831161066257829003601f168201915b50505050509050919050565b6001600160a01b0385163314806106a757506106a7853361036c565b6107195760405162461bcd60e51b815260206004820152603260248201527f455243313135353a207472616e736665722063616c6c6572206973206e6f742060448201527f6f776e6572206e6f7220617070726f766564000000000000000000000000000060648201526084016104e2565b6107268585858585610e59565b5050505050565b6001600160a01b0382166000908152600460205260409020546107509082610e4d565b34101561079f5760405162461bcd60e51b815260206004820152601760248201527f696e73756666696369656e742066756e64732073656e7400000000000000000060448201526064016104e2565b6001600160a01b0382166000908152600460205260409020600101548111156108305760405162461bcd60e51b815260206004820152602260248201527f696e76616c696420616d6f756e74206f6620736861726573207265717565737460448201527f656400000000000000000000000000000000000000000000000000000000000060648201526084016104e2565b8061083d83600354610468565b101561088b5760405162461bcd60e51b815260206004820152601e60248201527f696e73756666696369656e7420616d6f756e742066726f6d206f776e6572000060448201526064016104e2565b6001600160a01b038216600090815260056020526040812080543492906108b3908490611f2d565b925050819055506108d882336003548460405180602001604052806000815250610d89565b6001600160a01b03821660009081526004602052604090206001015481141561091f576001600160a01b038216600090815260046020526040812081815560010155610989565b6040805180820182526001600160a01b0384166000818152600460208181529482208054855292909152835260010154909182019061095e90846110f7565b90526001600160a01b0383166000908152600460209081526040909120825181559101516001909101555b610994600933611103565b505050565b60608151835114610a125760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e67746860448201527f206d69736d61746368000000000000000000000000000000000000000000000060648201526084016104e2565b6000835167ffffffffffffffff811115610a2e57610a2e612088565b604051908082528060200260200182016040528015610a57578160200160208202803683370190505b50905060005b8451811015610acf57610aa2858281518110610a7b57610a7b612072565b6020026020010151858381518110610a9557610a95612072565b6020026020010151610468565b828281518110610ab457610ab4612072565b6020908102919091010152610ac881612023565b9050610a5d565b509392505050565b33600090815260056020526040902054821115610b365760405162461bcd60e51b815260206004820152601260248201527f696e73756666696369656e742066756e6473000000000000000000000000000060448201526064016104e2565b6040516001600160a01b0382169083156108fc029084906000818181858888f19350505050158015610b6c573d6000803e3d6000fd5b503360009081526005602052604081208054849290610b8c908490611fa4565b90915550505050565b600654610ba3908290610e4d565b341015610bf25760405162461bcd60e51b815260206004820152601660248201527f496e76616c6964207061796d656e7420616d6f756e740000000000000000000060448201526064016104e2565b600754600854610c029083611118565b1115610c505760405162461bcd60e51b815260206004820152601860248201527f496e76616c696420616d6f756e74206f6620737570706c79000000000000000060448201526064016104e2565b610c6d336003548360405180602001604052806000815250611124565b600854610c7a9082611118565b600855610c88600933611103565b5050565b610c8833838361124a565b80610ca433600354610468565b1015610cf25760405162461bcd60e51b815260206004820152601b60248201527f63616c6c6572206d757374206f776e20676976656e20746f6b656e000000000060448201526064016104e2565b33600090815260016020908152604080832030845290915290205460ff16610d5c5760405162461bcd60e51b815260206004820152601960248201527f636f6e7472616374206d75737420626520617070726f7665640000000000000060448201526064016104e2565b60408051808201825292835260208084019283523360009081526004909152209151825551600190910155565b6001600160a01b038516331480610da55750610da5853361036c565b610e175760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260448201527f20617070726f766564000000000000000000000000000000000000000000000060648201526084016104e2565b610726858585858561135d565b600061050e825490565b6000610e3a8383611526565b9392505050565b6000610e3a8284611f45565b6000610e3a8284611f67565b8151835114610ed05760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060448201527f6d69736d6174636800000000000000000000000000000000000000000000000060648201526084016104e2565b6001600160a01b038416610f4c5760405162461bcd60e51b815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016104e2565b3360005b8451811015611089576000858281518110610f6d57610f6d612072565b602002602001015190506000858381518110610f8b57610f8b612072565b602090810291909101810151600084815280835260408082206001600160a01b038e1683529093529190912054909150818110156110315760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201527f72207472616e736665720000000000000000000000000000000000000000000060648201526084016104e2565b6000838152602081815260408083206001600160a01b038e8116855292528083208585039055908b1682528120805484929061106e908490611f2d565b925050819055505050508061108290612023565b9050610f50565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb87876040516110d9929190611ec8565b60405180910390a46110ef818787878787611550565b505050505050565b6000610e3a8284611fa4565b6000610e3a836001600160a01b038416611764565b6000610e3a8284611f2d565b6001600160a01b0384166111a05760405162461bcd60e51b815260206004820152602160248201527f455243313135353a206d696e7420746f20746865207a65726f2061646472657360448201527f730000000000000000000000000000000000000000000000000000000000000060648201526084016104e2565b336111ba816000876111b1886117b3565b610726886117b3565b6000848152602081815260408083206001600160a01b0389168452909152812080548592906111ea908490611f2d565b909155505060408051858152602081018590526001600160a01b0380881692600092918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4610726816000878787876117fe565b816001600160a01b0316836001600160a01b031614156112d25760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c2073746174757360448201527f20666f722073656c66000000000000000000000000000000000000000000000060648201526084016104e2565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0384166113d95760405162461bcd60e51b815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016104e2565b336113e98187876111b1886117b3565b6000848152602081815260408083206001600160a01b038a168452909152902054838110156114805760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201527f72207472616e736665720000000000000000000000000000000000000000000060648201526084016104e2565b6000858152602081815260408083206001600160a01b038b81168552925280832087850390559088168252812080548692906114bd908490611f2d565b909155505060408051868152602081018690526001600160a01b03808916928a821692918616917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a461151d8288888888886117fe565b50505050505050565b600082600001828154811061153d5761153d612072565b9060005260206000200154905092915050565b6001600160a01b0384163b156110ef576040517fbc197c810000000000000000000000000000000000000000000000000000000081526001600160a01b0385169063bc197c81906115ad9089908990889088908890600401611e14565b602060405180830381600087803b1580156115c757600080fd5b505af19250505080156115f7575060408051601f3d908101601f191682019092526115f491810190611d0f565b60015b6116ad5761160361209e565b806308c379a0141561163d57506116186120ba565b80611623575061163f565b8060405162461bcd60e51b81526004016104e29190611ef6565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e204552433131353560448201527f526563656976657220696d706c656d656e74657200000000000000000000000060648201526084016104e2565b7fffffffff0000000000000000000000000000000000000000000000000000000081167fbc197c81000000000000000000000000000000000000000000000000000000001461151d5760405162461bcd60e51b815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a6563746560448201527f6420746f6b656e7300000000000000000000000000000000000000000000000060648201526084016104e2565b60008181526001830160205260408120546117ab5750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915561050e565b50600061050e565b604080516001808252818301909252606091600091906020808301908036833701905050905082816000815181106117ed576117ed612072565b602090810291909101015292915050565b6001600160a01b0384163b156110ef576040517ff23a6e610000000000000000000000000000000000000000000000000000000081526001600160a01b0385169063f23a6e619061185b9089908990889088908890600401611e72565b602060405180830381600087803b15801561187557600080fd5b505af19250505080156118a5575060408051601f3d908101601f191682019092526118a291810190611d0f565b60015b6118b15761160361209e565b7fffffffff0000000000000000000000000000000000000000000000000000000081167ff23a6e61000000000000000000000000000000000000000000000000000000001461151d5760405162461bcd60e51b815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a6563746560448201527f6420746f6b656e7300000000000000000000000000000000000000000000000060648201526084016104e2565b600082601f83011261197957600080fd5b8135602061198682611f09565b6040516119938282611ff6565b8381528281019150858301600585901b870184018810156119b357600080fd5b60005b858110156119d2578135845292840192908401906001016119b6565b5090979650505050505050565b600082601f8301126119f057600080fd5b813567ffffffffffffffff811115611a0a57611a0a612088565b604051611a216020601f19601f8501160182611ff6565b818152846020838601011115611a3657600080fd5b816020850160208301376000918101602001919091529392505050565b600060208284031215611a6557600080fd5b8135610e3a81612162565b60008060408385031215611a8357600080fd5b8235611a8e81612162565b91506020830135611a9e81612162565b809150509250929050565b600080600080600060a08688031215611ac157600080fd5b8535611acc81612162565b94506020860135611adc81612162565b9350604086013567ffffffffffffffff80821115611af957600080fd5b611b0589838a01611968565b94506060880135915080821115611b1b57600080fd5b611b2789838a01611968565b93506080880135915080821115611b3d57600080fd5b50611b4a888289016119df565b9150509295509295909350565b600080600080600060a08688031215611b6f57600080fd5b8535611b7a81612162565b94506020860135611b8a81612162565b93506040860135925060608601359150608086013567ffffffffffffffff811115611bb457600080fd5b611b4a888289016119df565b60008060408385031215611bd357600080fd5b8235611bde81612162565b915060208301358015158114611a9e57600080fd5b60008060408385031215611c0657600080fd5b8235611c1181612162565b946020939093013593505050565b60008060408385031215611c3257600080fd5b823567ffffffffffffffff80821115611c4a57600080fd5b818501915085601f830112611c5e57600080fd5b81356020611c6b82611f09565b604051611c788282611ff6565b8381528281019150858301600585901b870184018b1015611c9857600080fd5b600096505b84871015611cc4578035611cb081612162565b835260019690960195918301918301611c9d565b5096505086013592505080821115611cdb57600080fd5b50611ce885828601611968565b9150509250929050565b600060208284031215611d0457600080fd5b8135610e3a81612177565b600060208284031215611d2157600080fd5b8151610e3a81612177565b600060208284031215611d3e57600080fd5b5035919050565b60008060408385031215611d5857600080fd5b823591506020830135611a9e81612162565b60008060408385031215611d7d57600080fd5b50508035926020909101359150565b600081518084526020808501945080840160005b83811015611dbc57815187529582019590820190600101611da0565b509495945050505050565b6000815180845260005b81811015611ded57602081850181015186830182015201611dd1565b81811115611dff576000602083870101525b50601f01601f19169290920160200192915050565b60006001600160a01b03808816835280871660208401525060a06040830152611e4060a0830186611d8c565b8281036060840152611e528186611d8c565b90508281036080840152611e668185611dc7565b98975050505050505050565b60006001600160a01b03808816835280871660208401525084604083015283606083015260a06080830152611eaa60a0830184611dc7565b979650505050505050565b602081526000610e3a6020830184611d8c565b604081526000611edb6040830185611d8c565b8281036020840152611eed8185611d8c565b95945050505050565b602081526000610e3a6020830184611dc7565b600067ffffffffffffffff821115611f2357611f23612088565b5060051b60200190565b60008219821115611f4057611f4061205c565b500190565b600082611f6257634e487b7160e01b600052601260045260246000fd5b500490565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611f9f57611f9f61205c565b500290565b600082821015611fb657611fb661205c565b500390565b600181811c90821680611fcf57607f821691505b60208210811415611ff057634e487b7160e01b600052602260045260246000fd5b50919050565b601f19601f830116810181811067ffffffffffffffff8211171561201c5761201c612088565b6040525050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156120555761205561205c565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b600060033d11156120b75760046000803e5060005160e01c5b90565b600060443d10156120c85790565b6040517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc803d016004833e81513d67ffffffffffffffff816024840111818411171561211657505050505090565b828501915081518181111561212e5750505050505090565b843d87010160208285010111156121485750505050505090565b61215760208286010187611ff6565b509095945050505050565b6001600160a01b038116811461046557600080fd5b7fffffffff000000000000000000000000000000000000000000000000000000008116811461046557600080fdfea2646970667358221220e23883bc9dcde91928f5d54a68de7204484673dd717d588ddd7201d15a83f61a64736f6c63430008070033a26469706673582212203b705194864ccddfb685640153db1ef15eaea18319d4f99b5ec741bda54fb84e64736f6c63430008070033";

export class DAORouter__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _daoName: string,
    _governorAddress: string,
    _tokenAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DAORouter> {
    return super.deploy(
      _daoName,
      _governorAddress,
      _tokenAddress,
      overrides || {}
    ) as Promise<DAORouter>;
  }
  getDeployTransaction(
    _daoName: string,
    _governorAddress: string,
    _tokenAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _daoName,
      _governorAddress,
      _tokenAddress,
      overrides || {}
    );
  }
  attach(address: string): DAORouter {
    return super.attach(address) as DAORouter;
  }
  connect(signer: Signer): DAORouter__factory {
    return super.connect(signer) as DAORouter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DAORouterInterface {
    return new utils.Interface(_abi) as DAORouterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DAORouter {
    return new Contract(address, _abi, signerOrProvider) as DAORouter;
  }
}