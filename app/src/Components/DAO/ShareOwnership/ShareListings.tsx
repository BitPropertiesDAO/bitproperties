import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { ethers } from "ethers";
import { Property__factory as PropertyFactory } from "../../../typechain";
import "./styles.css";

interface ShareListing {
  numberOfShares: number;
  sharePrice: number;
  ownerAddress: string;
  listingID?: any;
}

export default function ShareListings(props: ShareListing) {
  let { PropertyAddress } = useParams();
  const provider = new ethers.providers.JsonRpcProvider(
    "http://localhost:8545"
  );
  const signer = provider.getSigner();
  //   @ts-ignore
  const Property = PropertyFactory.connect(PropertyAddress, signer);

  const handleBuyShares = async (listingId: any) => {
    console.log(listingId);
    try {
      const x = await Property.Listings(listingId);
      const numberShares = await x.amount.toNumber();
      const buySharesTsx = await Property.purchaseShares(
        listingId,
        numberShares
      );
      const receipt = await buySharesTsx.wait();
      console.log(receipt);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // <div className="listing--grid">
    <>
      <p className="listing--grid--item">{props.listingID}</p>
      <p className="listing--grid--item">{props.numberOfShares}</p>
      <p className="listing--grid--item">{props.sharePrice}</p>
      <p className="listing--grid--item">
        {props.ownerAddress.replace(/(.{9})..+/, "$1…")}
      </p>

      {/* AddSmarter way to get ListingID */}
      <button
        onClick={() => handleBuyShares(props.listingID)}
        className="listing--grid--item listing-button"
      >
        BUY
      </button>
    </>
  );
}
