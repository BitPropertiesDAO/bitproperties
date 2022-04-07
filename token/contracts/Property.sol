pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Property is ERC1155 {
    // emitted when a user purchases shares listed by another user
    event PurchaseShares(address buyer, address seller, uint256 amount);
    // emitted when a user lists some portion of their shares for sale
    event ListShares(address seller, uint256 price, uint256 amount);
    // emitted when a user mints some of the supply of the collection
    event MintShares(address minter, uint256 amount);
    // emitted when a user withdraws the funds they have available within the contract
    // for example: a user listed shares, they sold, the user wants their funds out
    event WithdrawFunds(address withdrawalAddress, uint256 value);
    // emitted when funds are received into the contract
    event ReceiveFunds(address fromAddress, uint256 value);
    // emitted for each payment made to individual addresses after the shares-based split
    event ReceiveFundsPayout(address toAddress, uint256 tokenBalance, uint256 value);

    using SafeMath for uint256;
    using EnumerableSet for EnumerableSet.AddressSet;

    using Counters for Counters.Counter;
    Counters.Counter public listingCounter;

    uint256 TOKEN_ID = 0;
    mapping(uint256 => Listing) public listings;
    mapping(address => uint256) public paymentBalances;

    struct Listing {
        bool isActive;
        uint listingID;
        uint256 price;
        uint256 amount;
        address owner;
    }

    Listing[] public Listings;

    uint256 public pricePerShare;
    uint256 public totalShares;
    uint256 public totalIssuedShares;
    EnumerableSet.AddressSet private shareHolders;

    constructor(string memory _baseUrl, uint256 _pricePerShare, uint256 _totalShares) public ERC1155(_baseUrl) {
        pricePerShare = _pricePerShare;
        totalShares = _totalShares;
    }

    function mint(uint256 amountOfTokens) public payable {
        require(msg.value >= amountOfTokens.mul(pricePerShare), "Invalid payment amount");
        require(totalIssuedShares.add(amountOfTokens) <= totalShares, "Invalid amount of supply");

        _mint(msg.sender, TOKEN_ID, amountOfTokens, "");

        totalIssuedShares = totalIssuedShares.add(amountOfTokens);
        shareHolders.add(msg.sender);

        emit MintShares(msg.sender, amountOfTokens);
    }

    function listShares (uint256 price, uint256 amount) public {
        require(balanceOf(msg.sender, TOKEN_ID) >= amount, "caller must own given token");
        require(isApprovedForAll(msg.sender, address(this)), "contract must be approved");

        Listing memory newListing = Listing(true, listingCounter.current(), price, amount, msg.sender);
        Listings.push(newListing);
        listingCounter.increment();

        // emit ListShares(msg.sender, listings[msg.sender].price, listings[msg.sender].amount);
    }

    function purchaseShares (uint256 listingId, uint256 amountToPurchase) public payable {
        require(msg.value >= Listings[listingId].price.mul(amountToPurchase), "insufficient funds sent");
        require(amountToPurchase <= Listings[listingId].amount, "invalid amount of shares requested");
        require(balanceOf(Listings[listingId].owner, TOKEN_ID) >= amountToPurchase, "insufficient amount from owner");
        require(Listings[listingId].isActive == true, "listing not active");

        paymentBalances[Listings[listingId].owner] += msg.value;

        safeTransferFrom(Listings[listingId].owner, msg.sender, TOKEN_ID, amountToPurchase, "");

        Listings[listingId].isActive = false;

        shareHolders.add(msg.sender);

        emit PurchaseShares(msg.sender, Listings[listingId].owner, amountToPurchase);
    }

    function withdrawFunds (uint256 amount, address payable recipientAddress) public {
        require(paymentBalances[msg.sender] >= amount, "insufficient funds");

        recipientAddress.transfer(amount);
        paymentBalances[msg.sender] -= amount;

        emit WithdrawFunds(msg.sender, amount);
    }

    function receiveFunds () public payable {   // property manager pays funds
        // iterate over each holder
        for (uint i = 0; i < shareHolders.length(); i++) {
            address payable shareHolderAddr = payable(shareHolders.at(i));
            uint256 tokenBalance = balanceOf(shareHolderAddr, TOKEN_ID);

            if (tokenBalance > 0) {
                uint256 partialPayment = tokenBalance.div(totalIssuedShares).mul(msg.value);
                // paymentBalances[shareHolderAddr] = paymentBalances[shareHolderAddr].add(partialPayment);
                shareHolderAddr.transfer(partialPayment);

                emit ReceiveFundsPayout(shareHolderAddr, tokenBalance, partialPayment);
            }
        }
        emit ReceiveFunds(msg.sender, msg.value);
    }
}
