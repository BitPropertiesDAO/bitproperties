pragma solidity ^0.8.7;

import "./DAORouter.sol";

contract DAOFactory {
    struct DAO {
        address routerAddr;
        address governanceTokenAddr;
        address governorAddr;
    }

    mapping(address => DAO) daoRouters;

    constructor () {
        /**
            1. Launch the governance token with its tokenomics
            2. Launch the governor smart contract
            3. Create vesting wallets (optional)
            4. Launch treasury smart contract
            5. Create the router smart contract with all the sub-contracts
               addresses passed into the constructor
         */
    }

}