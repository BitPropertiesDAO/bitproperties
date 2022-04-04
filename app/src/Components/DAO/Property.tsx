import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ethers } from "ethers";
import { Property__factory as PropertyFactory } from "../../typechain";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

export default function Property() {
  const [propertyInformation, setPropertyInformation] = useState<any>({
    pricePerShare: "",
    totalShares: "",
    totalIssuedShares: "",
  });
  const [sharesToBuy, setSharesToBuy] = useState(0);
  const [totalPrice, setTotalPrice] = useState<number>();
  const [eventTransaction, setEventTransaction] = useState<any>();

  const [tempAddress, setTempAddress] = useState("");

  const [myShares, setMyShares] = useState<any>("");

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
  }, [eventTransaction, tempAddress]);

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
      console.log(buySharesReceipt);
      setEventTransaction(buySharesReceipt);
    } catch (error) {
      console.log(error);
    }
  };

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

      <br />

      <div>YourAddress: {tempAddress}</div>
      <div>You own: {myShares} shares</div>
    </>
  );
}
