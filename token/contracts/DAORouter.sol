pragma solidity ^0.8.7;

import "./Property.sol";
import "./DAOToken.sol";
import "./shared/SharedStructs.sol";

contract DAORouter {
    string public daoName;
    address public governorAddress;
    address public governanceTokenAddress;
    mapping(address => Property) public daoProperties;

    constructor (
        string memory _daoName,
        address _governorAddress,
        address _tokenAddress
    ) public {
        daoName = _daoName;
        governorAddress = _governorAddress;
        governanceTokenAddress = _tokenAddress;
    }

    function launchNewProperty (
        string memory _propertyName,
        uint256 _numShares,
        uint256 _pricePerShare
    ) public {
        Property newProperty = new Property("", _pricePerShare, _numShares);
        daoProperties[address(newProperty)] = newProperty;
    }

}
