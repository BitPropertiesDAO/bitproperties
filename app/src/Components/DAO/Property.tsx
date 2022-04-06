import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ethers } from "ethers";
import { Property__factory as PropertyFactory } from "../../typechain";
import ShareListings from "./ShareOwnership/ShareListings";

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

  let { PropertyAddress } = useParams();
  const provider = new ethers.providers.JsonRpcProvider(
    "http://localhost:8545"
  );
  const signer = provider.getSigner();

  // @ts-ignore
  const Property = PropertyFactory.connect(PropertyAddress, signer);

  useEffect(() => {
    // GET PROPERTY DETAILS FROM BLOCKCHAIN
    const readProperty = async () => {
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
    readProperty();

    // UPDATE NUMBER OF SHARES
    const handleBalance = async () => {
      // TEMPORARY
      // WAIT UNTIL CONTRACT IS LAUNCHED ON ALCHEMY AND THEN useWeb3React
      const getAddress = async () => {
        const address = await signer.getAddress();
        setTempAddress(address);
      };
      await getAddress();
      try {
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

  const handleSubmit = async (e: any) => {
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
        // const listingOne = await Property.Listings(0);
        // let { amount, owner, price } = listingOne;
        // console.log(numberListings.toNumber());
        // setListing({
        //   amount: amount.toNumber(),
        //   price: price.toNumber(),
        //   owner: owner,
        // });
      } catch (error) {
        console.log(error);
      }
      return numberListings;
    };
    getListing()
      .then(async (totalListings: any) => {
        for (let i = 0; i < totalListings; i++) {
          let listing = await Property.Listings(i);
          // listing.concat(i)
          listingsArray.push(listing);
        }
        return listingsArray;
      })
      .then((listingsArray) => {
        console.log(listingsArray);
        const listingElements = listingsArray
          .slice(0)
          .reverse()
          .map((listingX: any, index: any) => {
            return (
              <ShareListings
                key={index}
                listingID={index + 1}
                numberOfShares={listingX.amount.toNumber()}
                sharePrice={listingX.price.toNumber()}
                ownerAddress={listingX.owner}
              ></ShareListings>
            );
          });
        console.log(listingElements);
        return listingElements;
      })
      .then((elements) => {
        setListingElements(elements);
      });
  }, [tsxHash]);

  return (
    <>
      <div>Property Address: {PropertyAddress}</div>
      <div>Price Per Share: {propertyInformation.pricePerShare}</div>
      <div>Total Shares: {propertyInformation.totalShares}</div>
      <div>Total Issued Shares: {propertyInformation.totalIssuedShares}</div>
      <div>
        Shares Left:{" "}
        {propertyInformation.totalShares -
          propertyInformation.totalIssuedShares}
      </div>
      <br />
      <form onSubmit={handleSubmit}>
        <label>
          BuyShares:
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
        <div>{}</div>
      </form>
      <div className="listing--grid">
        <p className="listing--grid--item">ListingID</p>
        <p className="listing--grid--item">Number of Shares</p>
        <p className="listing--grid--item">Price per Share</p>
        <p className="listing--grid--item">Share Owner</p>
        <div></div>
        {listingElements}
      </div>
    </>
  );
}
