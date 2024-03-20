import React from "react";
import { useAccount, useConnect } from "wagmi";
import useShortenAddress from "../hooks/useShortenAddress";
import { injected } from "wagmi/connectors";
import { toast } from "react-toastify";
import ButtonPrimary from "./ButtonPrimary";
import PropTypes from "prop-types";

const ConnectWallet = ({ className = "" }) => {
  const { connect } = useConnect();
  const { address, isConnecting, isReconnecting, isConnected } = useAccount();
  const shortenedAddress = useShortenAddress(address);

  const onClickConnect = React.useCallback(() => {
    connect({ connector: injected(), chainId: 56 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickCopyAddress = React.useCallback(() => {
    navigator.clipboard.writeText(address);
    toast.success("You copied wallet address");
  }, [address]);

  return (
    <ButtonPrimary
      className={`px-5 py-4 ${className}`}
      onClick={!isConnected ? onClickConnect : onClickCopyAddress}
      loading={isConnecting || isReconnecting}
    >
      {!isConnected && !isConnecting && !isReconnecting && "Connect Wallet"}
      {isConnected && shortenedAddress}
    </ButtonPrimary>
  );
};

ButtonPrimary.displayName = "ConnectWallet";

ConnectWallet.propTypes = {
  className: PropTypes.string,
};

export default ConnectWallet;
