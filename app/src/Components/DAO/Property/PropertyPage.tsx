import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ethers } from "ethers";
import { Property__factory as PropertyFactory } from "../../../typechain";
import ShareListings from "../ShareOwnership/ShareListings";
import ListingsTable from "../ShareOwnership/ListingsTable";
import { AppHeader } from "../../DaoManager/InputFormAlchemy";
import DAOPageGrid from "../DAOPageGrid";

export default function Property() {
  const [tempAddress, setTempAddress] = useState("");
  const [propertyInformation, setPropertyInformation] = useState<any>({
    pricePerShare: "",
    totalShares: "",
    totalIssuedShares: "",
  });

  const [sharesToBuy, setSharesToBuy] = useState(0);
  const [totalPrice, setTotalPrice] = useState<number>();
  const [tsxHash, setTsxHash] = useState<any>({
    buyShares: "",
    listShares: "",
  });

  const [myShares, setMyShares] = useState<any>("");

  const [myListing, setMyListing] = useState<any>({
    price: 0,
    numberOfShares: 0,
  });

  const [activeListings, setActiveListings] = useState(true);

  let { PropertyAddress, PropertyName } = useParams();
  const provider = new ethers.providers.JsonRpcProvider(
    "http://localhost:8545"
  );
  const signer = provider.getSigner();

  // @ts-ignore
  const Property = PropertyFactory.connect(PropertyAddress, signer);

  useEffect(() => {
    // GET PROPERTY DETAILS FROM BLOCKCHAIN
    const readPropertyInfo = async () => {
      try {
        let readPricePerShare = await Property.pricePerShare();
        let readTotalShares = await Property.totalShares();
        let readTotalIssuedShares = await Property.totalIssuedShares();

        setPropertyInformation({
          pricePerShare: readPricePerShare.toNumber(),
          totalShares: readTotalShares.toNumber(),
          totalIssuedShares: readTotalIssuedShares.toNumber(),
        });
      } catch (error) {
        console.log(error);
      }
    };
    readPropertyInfo();

    // UPDATE NUMBER OF SHARES
    const handleBalance = async () => {
      // TEMPORARY
      // WAIT UNTIL CONTRACT IS LAUNCHED ON ALCHEMY AND THEN useWeb3React
      const getAddress = async () => {
        const address = await signer.getAddress();
        setTempAddress(address);
      };
      try {
        await getAddress();
        // @ts-ignore
        const readBalance = await Property.balanceOf(tempAddress, 0);
        const balance = readBalance.toNumber();
        setMyShares(balance);
      } catch (error) {
        console.log(error);
      }
    };
    handleBalance();
  }, [tsxHash, tempAddress]);

  useEffect(() => {
    // UPDATE TOTAL PRICE OF SHARE BASED ON AMOUNT
    const totalPrice = () => {
      setTotalPrice(sharesToBuy * propertyInformation.pricePerShare);
    };
    totalPrice();
  }, [sharesToBuy]);

  const handleMintShares = async (e: any) => {
    e.preventDefault();
    console.log(sharesToBuy);
    try {
      const buySharesTsx = await Property.mint(sharesToBuy, {
        value: totalPrice,
      });
      const buySharesReceipt = await buySharesTsx.wait();

      setTsxHash({
        buyShares: buySharesReceipt.transactionHash,
        listShares: tsxHash.listShares,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleListShares = async (e: any) => {
    e.preventDefault();
    console.log(myListing.numberOfShares);
    try {
      // @ts-ignore
      await Property.setApprovalForAll(PropertyAddress, true);
      const listSharesTsx = await Property.listShares(
        myListing.price,
        myListing.numberOfShares
      );
      const listSharesReceipt = await listSharesTsx.wait();
      setTsxHash({
        buyShares: tsxHash.buyShares,
        listShares: listSharesReceipt.transactionHash,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // // // // // // // // // // // // // //// // // // // // // // // // // // // // // // // // // // //

  const [listingElements, setListingElements] = useState([]);
  useEffect(() => {
    let listingsArray: any = [];
    const getListing = async () => {
      let numberListings: any;
      try {
        const listings = await Property.listingCounter();
        numberListings = await listings.toNumber();
      } catch (error) {
        console.log(error);
      }
      return numberListings;
    };
    getListing()
      .then(async (totalListings: any) => {
        for (let i = 0; i < totalListings; i++) {
          let listing = await Property.Listings(i);
          listingsArray.push(listing);
        }
        return listingsArray;
      })
      .then((listingsArray) => {
        const listingElements = listingsArray
          .filter((array: any) => {
            return array.isActive === activeListings;
          })
          .map((listingItem: any, index: any) => {
            return (
              <ShareListings
                key={index}
                listingID={listingItem.listingID.toNumber()}
                numberOfShares={listingItem.amount.toNumber()}
                sharePrice={listingItem.price.toNumber()}
                ownerAddress={listingItem.owner}
                isActive={listingItem.isActive}
                displayActive={activeListings}
              ></ShareListings>
            );
          });
        return listingElements;
      })
      .then((elements) => {
        setListingElements(elements);
      });
  }, [tsxHash, activeListings]);

  return (
    <>
      {/*////////////////////////////////////////// TOP GRID  //////////////////////////////////////////*/}
      <AppHeader>{PropertyName}</AppHeader>
      <div style={{ marginTop: 100 }} className="backboard">
        <DAOPageGrid
          title1="IRR"
          result1={24.8}
          unit1="%"
          title2="Share price"
          result2={82.58}
          unit2="$"
          // title3="Volume(24h)"
          // result3={"460K"}
          // unit3="Tokens"
          // title4="Token Price"
          // result4={1.31}
          // unit4="$"
        ></DAOPageGrid>
        <br />
        <br />
        <br />
        <br />
        {/*////////////////////////////////////////// IPO Shares  //////////////////////////////////////////*/}
        <div>
          <div>
            IPO Shares Left:{" "}
            {(
              propertyInformation.totalShares -
              propertyInformation.totalIssuedShares
            ).toLocaleString()}{" "}
            {""}
            at {propertyInformation.pricePerShare.toLocaleString()} ETH/Share
          </div>
          <form onSubmit={handleMintShares}>
            <label>
              Buy Initial Shares
              <input
                value={sharesToBuy}
                onChange={(e: any) => setSharesToBuy(e.target.value)}
                type="number"
                style={{ color: "black" }}
              ></input>
            </label>
            <div>totalPrice: {totalPrice}</div>
            <button type="submit">Buy</button>
          </form>
          <div>Transaction Hash:{tsxHash.buyShares}</div>
          <br />
          <br />
          <br />
          <br />
          {/*////////////////////////////////////////// My Shares => Listing  //////////////////////////////////////////*/}
          <div>YourAddress: {tempAddress}</div>
          <div>You own: {myShares} shares</div>
          <form onSubmit={handleListShares}>
            <label>
              List Shares:
              <input
                value={myListing.numberOfShares}
                onChange={(e: any) =>
                  setMyListing({
                    numberOfShares: e.target.value,
                    price: myListing.price,
                  })
                }
                type="number"
                style={{ color: "black" }}
                required
              ></input>
              <input
                value={myListing.price}
                onChange={(e: any) =>
                  setMyListing({
                    numberOfShares: myListing.numberOfShares,
                    price: e.target.value,
                  })
                }
                type="number"
                style={{ color: "black" }}
                required
              ></input>
            </label>
            <div>listing Price: {myListing.price}</div>
            <div>Shares Listing: {myListing.numberOfShares}</div>
            <button type="submit">List</button>
            <div>List Shares Receipt: {tsxHash.listShares}</div>
          </form>
        </div>
        <br />
        <br />
        <br />
        <br />
        {/*////////////////////////////////////////// Listings  //////////////////////////////////////////*/}
        <button onClick={() => setActiveListings(!activeListings)}>
          {activeListings ? "Active Listings" : "Completed Listings"}
        </button>
        <ListingsTable>{listingElements}</ListingsTable>
        <br />
        <br />
        <br />
        <br />
        {/*////////////////////////////////////////// Address  //////////////////////////////////////////*/}
        <div>Property Address: {PropertyAddress}</div>
        <div>Price Per Share: {propertyInformation.pricePerShare}</div>
        <div>Total Shares: {propertyInformation.totalShares}</div>
        <div>Total Issued Shares: {propertyInformation.totalIssuedShares}</div>
        <br />
        <br />
        <br />
        <br />
      </div>
      {/*////////////////////////////////////////// Listings  //////////////////////////////////////////*/}
    </>
  );
}
