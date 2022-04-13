import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ethers } from "ethers";
import { Property__factory as PropertyFactory } from "../../../typechain";
import ShareListings from "../ShareOwnership/ShareListings";
import ListingsTable from "../ShareOwnership/ListingsTable";
import { AppHeader, InputSubheading } from "../../DaoManager/InputFormAlchemy";
import DisplayGridTwo from "../DisplayGridTwo";
import ethPrice from "../../../placeholderData";
import { InputGroup } from "../../DaoManager/InputFormAlchemy";
import { InputNumber } from "antd";

export default function Property() {
  const [tempAddress, setTempAddress] = useState("");
  const [propertyInformation, setPropertyInformation] = useState<any>({
    pricePerShare: "",
    totalShares: "",
    totalIssuedShares: "",
  });

  const [sharesToBuy, setSharesToBuy] = useState(0);
  const [totalPrice, setTotalPrice] = useState<any>();
  const [tsxHash, setTsxHash] = useState<any>({
    buyShares: "",
    listShares: "",
  });

  const [myShares, setMyShares] = useState<any>("");

  const [myListing, setMyListing] = useState<any>({
    price: 0,
    numberOfShares: 0,
  });

  // const [activeListings, setActiveListings] = useState(true);

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
        myListing.price * 10 ** 9,
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
            return array.isActive === true;
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
                displayActive={true}
              ></ShareListings>
            );
          });
        return listingElements;
      })
      .then((elements) => {
        setListingElements(elements);
      });
  }, [tsxHash]);

  return (
    <>
      {/*////////////////////////////////////////// TOP GRID  //////////////////////////////////////////*/}
      <div className="backboard">
        <AppHeader>
          {PropertyName} :{" "}
          {propertyInformation.totalShares -
            propertyInformation.totalIssuedShares !==
          0 ? (
            <span style={{ color: "#17f73c" }}>MINTING</span>
          ) : (
            <span style={{ color: "#f48933" }}>MINTED</span>
          )}
        </AppHeader>

        <DisplayGridTwo
          title1="IRR"
          result1={24.8}
          unit1="%"
          title2="Share price"
          result2={(propertyInformation.pricePerShare * ethPrice) / 10 ** 9}
          unit2="$"
        ></DisplayGridTwo>
        <div className="page--divider"></div>
        {/*////////////////////////////////////////// Listings  //////////////////////////////////////////*/}
        {/* <button onClick={() => setActiveListings(!activeListings)}>
          {activeListings ? "Active Listings" : "Completed Listings"}
        </button> */}
        <ListingsTable>{listingElements}</ListingsTable>
        {/*////////////////////////////////////////// IPO Shares  //////////////////////////////////////////*/}
        <div className="page--divider"></div>

        <InputSubheading>
          IPO Shares Left:{" "}
          {(
            propertyInformation.totalShares -
            propertyInformation.totalIssuedShares
          ).toLocaleString()}{" "}
          {""}
          at {(propertyInformation.pricePerShare / 10 ** 9).toLocaleString()}
          ETH/Share
        </InputSubheading>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <InputNumber
            className="alchemy--input"
            value={sharesToBuy}
            onChange={(value: any) => setSharesToBuy(value)}
          ></InputNumber>
          <div>
            totalPrice: {totalPrice / 10 ** 9} ETH ≈{" "}
            {(totalPrice * ethPrice) / 10 ** 9} USD
          </div>
        </div>

        <div
          style={{ marginTop: 30, display: "flex", flexDirection: "column" }}
        >
          <button onClick={handleMintShares} className="primary--button">
            Mint Shares
          </button>
        </div>
        {tsxHash.buyShares && (
          <div style={{ color: "#17f73c" }}>
            Transaction Hash:{tsxHash.buyShares}
          </div>
        )}

        {/*////////////////////////////////////////// My Shares => Listing  //////////////////////////////////////////*/}
        <div className="page--divider"></div>
        <InputSubheading>
          Your Address: {tempAddress} <br />
          {myShares} shares under ownership
        </InputSubheading>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <InputNumber
            className="alchemy--input"
            value={myListing.numberOfShares}
            onChange={(value: any) =>
              setMyListing({
                numberOfShares: value,
                price: myListing.price,
              })
            }
          ></InputNumber>
          <div>{myListing.numberOfShares} Shares</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <InputNumber
            className="alchemy--input"
            value={myListing.price}
            onChange={(value: any) =>
              setMyListing({
                numberOfShares: myListing.numberOfShares,
                price: value,
              })
            }
            step={0.05}
          ></InputNumber>
          <div>{myListing.price} ETH</div>
        </div>
        <div
          style={{ marginTop: 30, display: "flex", flexDirection: "column" }}
        >
          <button onClick={handleListShares} className="primary--button">
            List Shares
          </button>{" "}
        </div>
        {tsxHash.listShares && (
          <div style={{ color: "#17f73c" }}>
            List Shares Receipt: {tsxHash.listShares}
          </div>
        )}
        <div className="page--divider"></div>
        <div>Property Address: {PropertyAddress}</div>
        <div>Total Shares: {propertyInformation.totalShares}</div>
      </div>

      {/*////////////////////////////////////////// Address  //////////////////////////////////////////*/}

      {/*////////////////////////////////////////// Listings  //////////////////////////////////////////*/}
    </>
  );
}
