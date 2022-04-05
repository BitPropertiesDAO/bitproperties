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
        internalType: "string",
        name: "daoName",
        type: "string",
      },
      {
        internalType: "address",
        name: "contractAddress",
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
  "0x60806040523480156200001157600080fd5b506040516200306b3803806200306b833981016040819052620000349162000140565b8251620000499060009060208601906200007d565b50600180546001600160a01b039384166001600160a01b031991821617909155600280549290931691161790555062000296565b8280546200008b9062000243565b90600052602060002090601f016020900481019282620000af5760008555620000fa565b82601f10620000ca57805160ff1916838001178555620000fa565b82800160010185558215620000fa579182015b82811115620000fa578251825591602001919060010190620000dd565b50620001089291506200010c565b5090565b5b808211156200010857600081556001016200010d565b80516001600160a01b03811681146200013b57600080fd5b919050565b6000806000606084860312156200015657600080fd5b83516001600160401b03808211156200016e57600080fd5b818601915086601f8301126200018357600080fd5b81518181111562000198576200019862000280565b604051601f8201601f19908116603f01168101908382118183101715620001c357620001c362000280565b81604052828152602093508984848701011115620001e057600080fd5b600091505b82821015620002045784820184015181830185015290830190620001e5565b82821115620002165760008484830101525b96506200022891505086820162000123565b935050506200023a6040850162000123565b90509250925092565b600181811c908216806200025857607f821691505b602082108114156200027a57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b612dc580620002a66000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c8063b42165d011610050578063b42165d0146100f7578063c4161f3314610117578063d090e47e1461012c57600080fd5b8063276f1c411461007757806348976936146100c15780639d116884146100d6575b600080fd5b6001546100979073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100c9610144565b6040516100b891906105d5565b6100e96100e4366004610551565b6101d2565b6040516100b89291906105ef565b6002546100979073ffffffffffffffffffffffffffffffffffffffff1681565b61012a61012536600461046f565b6102a4565b005b6004546101369081565b6040519081526020016100b8565b6000805461015190610627565b80601f016020809104026020016040519081016040528092919081815260200182805461017d90610627565b80156101ca5780601f1061019f576101008083540402835291602001916101ca565b820191906000526020600020905b8154815290600101906020018083116101ad57829003601f168201915b505050505081565b600381815481106101e257600080fd5b906000526020600020906002020160009150905080600001805461020590610627565b80601f016020809104026020016040519081016040528092919081815260200182805461023190610627565b801561027e5780601f106102535761010080835404028352916020019161027e565b820191906000526020600020905b81548152906001019060200180831161026157829003601f168201915b5050506001909301549192505073ffffffffffffffffffffffffffffffffffffffff1682565b600081836040516102b4906103c9565b606080825260009082015260208101929092526040820152608001604051809103906000f0801580156102eb573d6000803e3d6000fd5b506040805180820190915285815273ffffffffffffffffffffffffffffffffffffffff821660208083019190915260038054600181018255600091909152825180519495509293849360029092027fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b019261036a9284929101906103d6565b5060209190910151600191820180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9092169190911790556004805490910190555050505050565b6126e5806106ab83390190565b8280546103e290610627565b90600052602060002090601f016020900481019282610404576000855561044a565b82601f1061041d57805160ff191683800117855561044a565b8280016001018555821561044a579182015b8281111561044a57825182559160200191906001019061042f565b5061045692915061045a565b5090565b5b80821115610456576000815560010161045b565b60008060006060848603121561048457600080fd5b833567ffffffffffffffff8082111561049c57600080fd5b818601915086601f8301126104b057600080fd5b8135818111156104c2576104c261067b565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019083821181831017156105085761050861067b565b8160405282815289602084870101111561052157600080fd5b82602086016020830137600060208483010152809750505050505060208401359150604084013590509250925092565b60006020828403121561056357600080fd5b5035919050565b6000815180845260005b8181101561059057602081850181015186830182015201610574565b818111156105a2576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006105e8602083018461056a565b9392505050565b604081526000610602604083018561056a565b905073ffffffffffffffffffffffffffffffffffffffff831660208301529392505050565b600181811c9082168061063b57607f821691505b60208210811415610675577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfe608060405260006003553480156200001657600080fd5b50604051620026e5380380620026e5833981016040819052620000399162000115565b82620000458162000056565b506006919091556007555062000258565b80516200006b9060029060208401906200006f565b5050565b8280546200007d9062000205565b90600052602060002090601f016020900481019282620000a15760008555620000ec565b82601f10620000bc57805160ff1916838001178555620000ec565b82800160010185558215620000ec579182015b82811115620000ec578251825591602001919060010190620000cf565b50620000fa929150620000fe565b5090565b5b80821115620000fa5760008155600101620000ff565b6000806000606084860312156200012b57600080fd5b83516001600160401b03808211156200014357600080fd5b818601915086601f8301126200015857600080fd5b8151818111156200016d576200016d62000242565b604051601f8201601f19908116603f0116810190838211818310171562000198576200019862000242565b81604052828152602093508984848701011115620001b557600080fd5b600091505b82821015620001d95784820184015181830185015290830190620001ba565b82821115620001eb5760008484830101525b928801516040909801519299979850919695505050505050565b600181811c908216806200021a57607f821691505b602082108114156200023c57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b61247d80620002686000396000f3fe6080604052600436106101275760003560e01c80634e1273f4116100a5578063a0712d6811610074578063a238423611610059578063a238423614610331578063e985e9c514610351578063f242432a1461039a57600080fd5b8063a0712d68146102fe578063a22cb4651461031157600080fd5b80634e1273f41461025257806365d96c821461027f578063744bfe61146102c857806399530b06146102e857600080fd5b80630e89341c116100fc5780632eb2c2d6116100e15780632eb2c2d614610209578063342d6d32146102295780633a98ef391461023c57600080fd5b80630e89341c146101c657806323b7c646146101f357600080fd5b80625c33e11461012c578062fdd58e1461013657806301ffc9a71461016957806303fc8d2b14610199575b600080fd5b6101346103ba565b005b34801561014257600080fd5b50610156610151366004611e7c565b6104ea565b6040519081526020015b60405180910390f35b34801561017557600080fd5b50610189610184366004611f7b565b610596565b6040519015158152602001610160565b3480156101a557600080fd5b506101566101b4366004611cdc565b60056020526000908152604090205481565b3480156101d257600080fd5b506101e66101e1366004611fb5565b610679565b604051610160919061217f565b3480156101ff57600080fd5b5061015660085481565b34801561021557600080fd5b50610134610224366004611d32565b61070d565b610134610237366004611e7c565b6107af565b34801561024857600080fd5b5061015660075481565b34801561025e57600080fd5b5061027261026d366004611ea8565b610a71565b604051610160919061213e565b34801561028b57600080fd5b506102b361029a366004611cdc565b6004602052600090815260409020805460019091015482565b60408051928352602083019190915201610160565b3480156102d457600080fd5b506101346102e3366004611fce565b610baf565b3480156102f457600080fd5b5061015660065481565b61013461030c366004611fb5565b610c9f565b34801561031d57600080fd5b5061013461032c366004611e49565b610dcf565b34801561033d57600080fd5b5061013461034c366004611ff3565b610dde565b34801561035d57600080fd5b5061018961036c366004611cf9565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b3480156103a657600080fd5b506101346103b5366004611de0565b610f0a565b60005b6103c76009610fa5565b8110156104af5760006103db600983610faf565b905060006103eb826003546104ea565b9050801561049a5760006104143461040e60085485610fc290919063ffffffff16565b90610fce565b6040519091506001600160a01b0384169082156108fc029083906000818181858888f1935050505015801561044d573d6000803e3d6000fd5b50604080516001600160a01b0385168152602081018490529081018290527f1bce738afce154c79bcc3113f446651c11d8d4d89a3957b0c843afff0ef93ea09060600160405180910390a1505b505080806104a7906122ac565b9150506103bd565b50604080513381523460208201527ff7116f8ce12018cbf35ab846afe2ed8ca23445fc5f7f22d402077a0a151a507e910160405180910390a1565b60006001600160a01b03831661056d5760405162461bcd60e51b815260206004820152602b60248201527f455243313135353a2062616c616e636520717565727920666f7220746865207a60448201527f65726f206164647265737300000000000000000000000000000000000000000060648201526084015b60405180910390fd5b506000818152602081815260408083206001600160a01b03861684529091529020545b92915050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167fd9b67a2600000000000000000000000000000000000000000000000000000000148061062957507fffffffff0000000000000000000000000000000000000000000000000000000082167f0e89341c00000000000000000000000000000000000000000000000000000000145b8061059057507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831614610590565b60606002805461068890612244565b80601f01602080910402602001604051908101604052809291908181526020018280546106b490612244565b80156107015780601f106106d657610100808354040283529160200191610701565b820191906000526020600020905b8154815290600101906020018083116106e457829003601f168201915b50505050509050919050565b6001600160a01b0385163314806107295750610729853361036c565b61079b5760405162461bcd60e51b815260206004820152603260248201527f455243313135353a207472616e736665722063616c6c6572206973206e6f742060448201527f6f776e6572206e6f7220617070726f76656400000000000000000000000000006064820152608401610564565b6107a88585858585610fda565b5050505050565b6001600160a01b0382166000908152600460205260409020546107d29082610fce565b3410156108215760405162461bcd60e51b815260206004820152601760248201527f696e73756666696369656e742066756e64732073656e740000000000000000006044820152606401610564565b6001600160a01b0382166000908152600460205260409020600101548111156108b25760405162461bcd60e51b815260206004820152602260248201527f696e76616c696420616d6f756e74206f6620736861726573207265717565737460448201527f65640000000000000000000000000000000000000000000000000000000000006064820152608401610564565b806108bf836003546104ea565b101561090d5760405162461bcd60e51b815260206004820152601e60248201527f696e73756666696369656e7420616d6f756e742066726f6d206f776e657200006044820152606401610564565b6001600160a01b038216600090815260056020526040812080543492906109359084906121b6565b9250508190555061095a82336003548460405180602001604052806000815250610f0a565b6001600160a01b0382166000908152600460205260409020600101548114156109ad576001600160a01b0382166000908152600460205260408120818155600101556109a7600983611278565b50610a17565b6040805180820182526001600160a01b038416600081815260046020818152948220805485529290915283526001015490918201906109ec908461128d565b90526001600160a01b0383166000908152600460209081526040909120825181559101516001909101555b610a22600933611299565b50604080513381526001600160a01b03841660208201529081018290527f63d750b618ac6262a7e40139b41db26e8a37389241ff8feaba3154fbf3b53571906060015b60405180910390a15050565b60608151835114610aea5760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e67746860448201527f206d69736d6174636800000000000000000000000000000000000000000000006064820152608401610564565b6000835167ffffffffffffffff811115610b0657610b06612327565b604051908082528060200260200182016040528015610b2f578160200160208202803683370190505b50905060005b8451811015610ba757610b7a858281518110610b5357610b53612311565b6020026020010151858381518110610b6d57610b6d612311565b60200260200101516104ea565b828281518110610b8c57610b8c612311565b6020908102919091010152610ba0816122ac565b9050610b35565b509392505050565b33600090815260056020526040902054821115610c0e5760405162461bcd60e51b815260206004820152601260248201527f696e73756666696369656e742066756e647300000000000000000000000000006044820152606401610564565b6040516001600160a01b0382169083156108fc029084906000818181858888f19350505050158015610c44573d6000803e3d6000fd5b503360009081526005602052604081208054849290610c6490849061222d565b909155505060408051338152602081018490527f21901fa892c430ea8bd38b9390225ac8e67eac75ee10ffba16feefc539a288f99101610a65565b600654610cad908290610fce565b341015610cfc5760405162461bcd60e51b815260206004820152601660248201527f496e76616c6964207061796d656e7420616d6f756e74000000000000000000006044820152606401610564565b600754600854610d0c90836112ae565b1115610d5a5760405162461bcd60e51b815260206004820152601860248201527f496e76616c696420616d6f756e74206f6620737570706c7900000000000000006044820152606401610564565b610d773360035483604051806020016040528060008152506112ba565b600854610d8490826112ae565b600855610d92600933611299565b5060408051338152602081018390527fe0db2c42b942601357f9499d6f0520c824b2ce7513135a456b661d1d3e45de5e910160405180910390a150565b610dda3383836113e0565b5050565b80610deb336003546104ea565b1015610e395760405162461bcd60e51b815260206004820152601b60248201527f63616c6c6572206d757374206f776e20676976656e20746f6b656e00000000006044820152606401610564565b33600090815260016020908152604080832030845290915290205460ff16610ea35760405162461bcd60e51b815260206004820152601960248201527f636f6e7472616374206d75737420626520617070726f766564000000000000006044820152606401610564565b604080518082018252838152602080820184815233600081815260048452859020935180855591516001909401849055845190815291820152918201527f528c4bf715f27225e442f86635ed3f96a072e17bd9d769906daf6dd14940086490606001610a65565b6001600160a01b038516331480610f265750610f26853361036c565b610f985760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260448201527f20617070726f76656400000000000000000000000000000000000000000000006064820152608401610564565b6107a885858585856114f3565b6000610590825490565b6000610fbb83836116bc565b9392505050565b6000610fbb82846121ce565b6000610fbb82846121f0565b81518351146110515760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060448201527f6d69736d617463680000000000000000000000000000000000000000000000006064820152608401610564565b6001600160a01b0384166110cd5760405162461bcd60e51b815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610564565b3360005b845181101561120a5760008582815181106110ee576110ee612311565b60200260200101519050600085838151811061110c5761110c612311565b602090810291909101810151600084815280835260408082206001600160a01b038e1683529093529190912054909150818110156111b25760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201527f72207472616e73666572000000000000000000000000000000000000000000006064820152608401610564565b6000838152602081815260408083206001600160a01b038e8116855292528083208585039055908b168252812080548492906111ef9084906121b6565b9250508190555050505080611203906122ac565b90506110d1565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb878760405161125a929190612151565b60405180910390a46112708187878787876116e6565b505050505050565b6000610fbb836001600160a01b0384166118fa565b6000610fbb828461222d565b6000610fbb836001600160a01b0384166119ed565b6000610fbb82846121b6565b6001600160a01b0384166113365760405162461bcd60e51b815260206004820152602160248201527f455243313135353a206d696e7420746f20746865207a65726f2061646472657360448201527f73000000000000000000000000000000000000000000000000000000000000006064820152608401610564565b336113508160008761134788611a3c565b6107a888611a3c565b6000848152602081815260408083206001600160a01b0389168452909152812080548592906113809084906121b6565b909155505060408051858152602081018590526001600160a01b0380881692600092918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a46107a881600087878787611a87565b816001600160a01b0316836001600160a01b031614156114685760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c2073746174757360448201527f20666f722073656c6600000000000000000000000000000000000000000000006064820152608401610564565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b03841661156f5760405162461bcd60e51b815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610564565b3361157f81878761134788611a3c565b6000848152602081815260408083206001600160a01b038a168452909152902054838110156116165760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201527f72207472616e73666572000000000000000000000000000000000000000000006064820152608401610564565b6000858152602081815260408083206001600160a01b038b81168552925280832087850390559088168252812080548692906116539084906121b6565b909155505060408051868152602081018690526001600160a01b03808916928a821692918616917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a46116b3828888888888611a87565b50505050505050565b60008260000182815481106116d3576116d3612311565b9060005260206000200154905092915050565b6001600160a01b0384163b15611270576040517fbc197c810000000000000000000000000000000000000000000000000000000081526001600160a01b0385169063bc197c8190611743908990899088908890889060040161209d565b602060405180830381600087803b15801561175d57600080fd5b505af192505050801561178d575060408051601f3d908101601f1916820190925261178a91810190611f98565b60015b6118435761179961233d565b806308c379a014156117d357506117ae612359565b806117b957506117d5565b8060405162461bcd60e51b8152600401610564919061217f565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e204552433131353560448201527f526563656976657220696d706c656d656e7465720000000000000000000000006064820152608401610564565b7fffffffff0000000000000000000000000000000000000000000000000000000081167fbc197c8100000000000000000000000000000000000000000000000000000000146116b35760405162461bcd60e51b815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a6563746560448201527f6420746f6b656e730000000000000000000000000000000000000000000000006064820152608401610564565b600081815260018301602052604081205480156119e357600061191e60018361222d565b85549091506000906119329060019061222d565b905081811461199757600086600001828154811061195257611952612311565b906000526020600020015490508087600001848154811061197557611975612311565b6000918252602080832090910192909255918252600188019052604090208390555b85548690806119a8576119a86122fb565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610590565b6000915050610590565b6000818152600183016020526040812054611a3457508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610590565b506000610590565b60408051600180825281830190925260609160009190602080830190803683370190505090508281600081518110611a7657611a76612311565b602090810291909101015292915050565b6001600160a01b0384163b15611270576040517ff23a6e610000000000000000000000000000000000000000000000000000000081526001600160a01b0385169063f23a6e6190611ae490899089908890889088906004016120fb565b602060405180830381600087803b158015611afe57600080fd5b505af1925050508015611b2e575060408051601f3d908101601f19168201909252611b2b91810190611f98565b60015b611b3a5761179961233d565b7fffffffff0000000000000000000000000000000000000000000000000000000081167ff23a6e6100000000000000000000000000000000000000000000000000000000146116b35760405162461bcd60e51b815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a6563746560448201527f6420746f6b656e730000000000000000000000000000000000000000000000006064820152608401610564565b600082601f830112611c0257600080fd5b81356020611c0f82612192565b604051611c1c828261227f565b8381528281019150858301600585901b87018401881015611c3c57600080fd5b60005b85811015611c5b57813584529284019290840190600101611c3f565b5090979650505050505050565b600082601f830112611c7957600080fd5b813567ffffffffffffffff811115611c9357611c93612327565b604051611caa6020601f19601f850116018261227f565b818152846020838601011115611cbf57600080fd5b816020850160208301376000918101602001919091529392505050565b600060208284031215611cee57600080fd5b8135610fbb81612401565b60008060408385031215611d0c57600080fd5b8235611d1781612401565b91506020830135611d2781612401565b809150509250929050565b600080600080600060a08688031215611d4a57600080fd5b8535611d5581612401565b94506020860135611d6581612401565b9350604086013567ffffffffffffffff80821115611d8257600080fd5b611d8e89838a01611bf1565b94506060880135915080821115611da457600080fd5b611db089838a01611bf1565b93506080880135915080821115611dc657600080fd5b50611dd388828901611c68565b9150509295509295909350565b600080600080600060a08688031215611df857600080fd5b8535611e0381612401565b94506020860135611e1381612401565b93506040860135925060608601359150608086013567ffffffffffffffff811115611e3d57600080fd5b611dd388828901611c68565b60008060408385031215611e5c57600080fd5b8235611e6781612401565b915060208301358015158114611d2757600080fd5b60008060408385031215611e8f57600080fd5b8235611e9a81612401565b946020939093013593505050565b60008060408385031215611ebb57600080fd5b823567ffffffffffffffff80821115611ed357600080fd5b818501915085601f830112611ee757600080fd5b81356020611ef482612192565b604051611f01828261227f565b8381528281019150858301600585901b870184018b1015611f2157600080fd5b600096505b84871015611f4d578035611f3981612401565b835260019690960195918301918301611f26565b5096505086013592505080821115611f6457600080fd5b50611f7185828601611bf1565b9150509250929050565b600060208284031215611f8d57600080fd5b8135610fbb81612419565b600060208284031215611faa57600080fd5b8151610fbb81612419565b600060208284031215611fc757600080fd5b5035919050565b60008060408385031215611fe157600080fd5b823591506020830135611d2781612401565b6000806040838503121561200657600080fd5b50508035926020909101359150565b600081518084526020808501945080840160005b8381101561204557815187529582019590820190600101612029565b509495945050505050565b6000815180845260005b818110156120765760208185018101518683018201520161205a565b81811115612088576000602083870101525b50601f01601f19169290920160200192915050565b60006001600160a01b03808816835280871660208401525060a060408301526120c960a0830186612015565b82810360608401526120db8186612015565b905082810360808401526120ef8185612050565b98975050505050505050565b60006001600160a01b03808816835280871660208401525084604083015283606083015260a0608083015261213360a0830184612050565b979650505050505050565b602081526000610fbb6020830184612015565b6040815260006121646040830185612015565b82810360208401526121768185612015565b95945050505050565b602081526000610fbb6020830184612050565b600067ffffffffffffffff8211156121ac576121ac612327565b5060051b60200190565b600082198211156121c9576121c96122e5565b500190565b6000826121eb57634e487b7160e01b600052601260045260246000fd5b500490565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615612228576122286122e5565b500290565b60008282101561223f5761223f6122e5565b500390565b600181811c9082168061225857607f821691505b6020821081141561227957634e487b7160e01b600052602260045260246000fd5b50919050565b601f19601f830116810181811067ffffffffffffffff821117156122a5576122a5612327565b6040525050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156122de576122de6122e5565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b600060033d11156123565760046000803e5060005160e01c5b90565b600060443d10156123675790565b6040517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc803d016004833e81513d67ffffffffffffffff81602484011181841117156123b557505050505090565b82850191508151818111156123cd5750505050505090565b843d87010160208285010111156123e75750505050505090565b6123f66020828601018761227f565b509095945050505050565b6001600160a01b038116811461241657600080fd5b50565b7fffffffff000000000000000000000000000000000000000000000000000000008116811461241657600080fdfea26469706673582212204f31f36e8812445d82556438c0a6cdab2f458f156f4c33232f83cef54f8e9f0b64736f6c63430008070033a2646970667358221220b26ddcb1c21c363dd1241396493791a45851e237baa1646c1549585845f3d81764736f6c63430008070033";

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
