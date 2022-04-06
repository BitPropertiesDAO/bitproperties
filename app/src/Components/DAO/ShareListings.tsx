import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { ethers } from "ethers";
import { Property__factory as PropertyFactory } from "../../typechain";
import { isConstructorDeclaration } from "typescript";

export default function ShareListings() {
  const [numberOfListings, setNumberOfListings] = useState();
  //   const [listing, setListing] = useState<any>({
  //     price: 0,
  //     amount: 0,
  //     owner: "",
  //   });

  const [listingElements, setListingElements] = useState([]);

  let { PropertyAddress } = useParams();
  const provider = new ethers.providers.JsonRpcProvider(
    "http://localhost:8545"
  );
  const signer = provider.getSigner();
  //   @ts-ignore

  const Property = PropertyFactory.connect(PropertyAddress, signer);
  useEffect(() => {
    let listingsArray: any = [];
    const getListing = async () => {
      let numberListings: any = 0;
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
      setNumberOfListings(numberListings);
      return numberOfListings;
    };
    getListing()
      .then(async (totalListings: any) => {
        for (let i = 0; i < totalListings; i++) {
          let listing = await Property.Listings(i);
          listingsArray.push(listing);
        }
        console.log(listingsArray);
        return listingsArray;
      })
      .then((listingsArray) => {
        const listingElements = listingsArray
          .slice(0)
          .reverse()
          .map((listing: any, index: any) => {
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: 20,
              }}
            >
              Listings:
              <p>{listing.amount}</p>
              <p>{listing.price}</p>
              <p>{listing.owner}</p>
            </div>;
          });
        // console.log(listingElements);
        return listingElements;
      })
      .then((elements) => {
        setListingElements(elements);
      });
  }, []);

  return <>{listingElements}</>;
}
