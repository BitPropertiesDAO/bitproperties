import { useEffect, useState } from "react";
import web3 from "web3";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { injected } from "./utils/connectors";
import { useEagerConnect, useInactiveListener } from "./utils/hooks";
import { Signer } from "@ethersproject/abstract-signer";
import { Outlet } from "react-router";
import { Button } from "antd";

// Update with the contract address logged out to the CLI when it was deployed
// NOTE: the contract address must match the network MetaMask is connected to
const contractAddress = process.env.REACT_APP_SMART_CONTRACT_ADDRESS;

const WalletApp = () => {
  // const [contract, setContract] = useState(undefined as Counter | undefined);
  const { chainId, account, activate, deactivate, active, library } =
    useWeb3React<Web3Provider>();

  // auto-connect connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();
  useInactiveListener(!triedEager);

  // useEffect(() => {
  //   if (!contractAddress) {
  //     throw new Error("Must set contract address as env var");
  //   }

  //   setContract(
  //     CounterFactory.connect(
  //       contractAddress,
  //       library?.getSigner(account as string) as Signer
  //     )
  //   );
  // }, [account, chainId, library]);

  const _connectToMetamask = () => {
    activate(injected);
    console.log(activate(injected));
  };

  const _getBalance = async () => {
    if (account) {
      const balanceWei = await library?.getBalance(account);
      alert(web3.utils.fromWei(balanceWei?.toString() || "0", "ether"));
    }
  };

  return (
    <div>
      {/* <div>ChainId: {chainId}</div> */}
      <Outlet />
      {/* <div>Account: {account}</div>
      {active ? (
        <div className="z-index---5">
          ✅
          <Button
            type="primary"
            onClick={() => deactivate()}
            className="z-index---5"
          >
            deactivate
          </Button>
          <Button
            type="primary"
            onClick={() => _getBalance()}
            className="z-index---5"
          >
            get balance
          </Button>
        </div>
      ) : (
        <Button onClick={_connectToMetamask}>Connect</Button>
      )}*/}
    </div>
  );
};

export default WalletApp;
