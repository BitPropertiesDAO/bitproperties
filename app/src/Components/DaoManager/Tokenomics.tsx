import { InputNumber, Input } from "antd";
import { useAppSelector } from "../../utils/reduxhooks";
import {
  changeTokenSymbol,
  changeTokenName,
  changeInitTokenSupply,
} from "./CreateDAO/DaoCreationSlice";
import { useDispatch } from "react-redux";

import PayableAccounts from "../DaoManager/CreateDAO/PayableAccount";
import { useEffect, useState } from "react";
import { AlchemyLinks } from "./InputFormAlchemy";
import { AppHeader } from "./InputFormAlchemy";
import { InputGroup } from "./InputFormAlchemy";
import { InputSubheading } from "./InputFormAlchemy";

export default function Tokenomics() {
  const dispatch = useDispatch();

  const inputs = useAppSelector((state) => {
    const inputs = state.Alchemy;
    return inputs;
  });

  const { tokenName, tokenSymbol, initTokenSupply } = inputs;

  const [totalPercent, setTotalPercent] = useState(0);

  const walletPercentages = useAppSelector((state) => {
    const walletPercentages = state.Alchemy.walletPercentages;
    return walletPercentages;
  });

  const { AirDropWallet, Liquidity, Burn, RealEstate, Marketing, Developer } =
    walletPercentages;

  useEffect(() => {
    setTotalPercent(
      AirDropWallet + Liquidity + Burn + RealEstate + Marketing + Developer
    );
  });

  return (
    <>
      <AppHeader>Tokenomics</AppHeader>
      <InputGroup>
        <InputSubheading>ERC20 Token Name</InputSubheading>
        <Input
          maxLength={25}
          style={{ width: 300 }}
          type="string"
          value={tokenName}
          onChange={(e) => dispatch(changeTokenName(String(e.target.value)))}
          className="alchemy--input"
        />
      </InputGroup>
      <InputGroup>
        <InputSubheading>ERC20 Token Symbol</InputSubheading>
        <Input
          maxLength={4}
          style={{ width: 100 }}
          type="string"
          value={tokenSymbol}
          onChange={(e) => dispatch(changeTokenSymbol(String(e.target.value)))}
          className="alchemy--input"
        />
      </InputGroup>
      <InputGroup>
        <InputSubheading>Initial Token Supply</InputSubheading>
        <div className="flex space--between">
          <InputNumber
            min={0}
            max={1000000000000}
            defaultValue={3}
            style={{ width: 225 }}
            className="alchemy--input"
            value={initTokenSupply}
            onChange={(value) => dispatch(changeInitTokenSupply(Number(value)))}
          />
          <div style={{ marginLeft: 100 }}>
            {initTokenSupply.toLocaleString()} {tokenSymbol}
          </div>
        </div>
      </InputGroup>
      <InputGroup>
        <InputSubheading>Payouts</InputSubheading>
        <PayableAccounts></PayableAccounts>
        <div
          className="alchemy--wallet--totalpercentage"
          style={{
            color: totalPercent !== 100 ? "red" : "lightgreen ",
          }}
        >
          {totalPercent !== 100 ? (
            <>
              Please make sure the total adds up to 100%
              <br />
              Total: ${totalPercent}%
            </>
          ) : (
            `Total: ${totalPercent}%`
          )}
          <br />
          <br />
        </div>
      </InputGroup>
      <AlchemyLinks
        Back="/app/Alchemy/create/governance"
        Next="/app/Alchemy/create/confirmation"
      ></AlchemyLinks>
    </>
  );
}
