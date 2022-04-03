pragma solidity ^0.8.7;

import "./DAORouter.sol";
import "./DAOToken.sol";
import "./DAOGovernor.sol";
import "./shared/SharedStructs.sol";

contract DAOFactory {
    event NewDAO(address daoAddress, address tokenAddress, address governorAddress);

    // keep track of all the DAOs created in array
    address[] public DAOs;

    // keep track of number of DAOs created
    using Counters for Counters.Counter;
    Counters.Counter public daoCounter;

    constructor () {}

    function launchDAO (
        string memory _daoName, 
        string memory _tokenName, 
        string memory _tokenSymbol,
        uint256 _initialSupply,
        SharedStructs.addresses memory _addresses,
        address _uniswapRouterAddress,
        SharedStructs.percentages memory _percentages
    ) public payable returns(address, address, address) {
        DAOToken token = new DAOToken(
            _tokenName,
            _tokenSymbol,
            _initialSupply, 
            _addresses._airDropContractAddress,
            _addresses._burnWalletAddress,
            _addresses._liquidityWalletAddress,
            _addresses._realEstateWalletAddress,
            _addresses._marketingWalletAddress,
            _addresses._developerWalletAddress,
            _uniswapRouterAddress,
            _percentages
        );

        DAOGovernor governor = new DAOGovernor(_daoName, token);

        DAORouter newDao = new DAORouter(
            _daoName,
            address(governor),
            address(token)
        );

        // respond with the address of the newly created DAO router, it's governor and it's token
        emit NewDAO(address(newDao), newDao.governanceTokenAddress(), newDao.governorAddress());

        // push new DAO router address to DAOs array
        DAOs.push(address(newDao));

        // increment daoCounter by one
        daoCounter.increment();

        return (address(newDao), newDao.governanceTokenAddress(), newDao.governorAddress());
    }

}