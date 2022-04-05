pragma solidity ^0.8.7;
import "./Property.sol";
import "./DAOToken.sol";
import "./shared/SharedStructs.sol";

contract DAORouter {
    string public daoName;
    address public governorAddress;
    address public governanceTokenAddress;
    struct PropertyListing {
        string daoName;
        address contractAddress;
    }

    event NewProperty(address propertyAddress);              
    PropertyListing[] public Properties;

    using Counters for Counters.Counter;
    Counters.Counter public propertyCounter;

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
        PropertyListing memory newPropertyListing = PropertyListing(_propertyName, address(newProperty));
        Properties.push(newPropertyListing);
        propertyCounter.increment();
    }
}
