/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface BankStorageInterface extends ethers.utils.Interface {
  functions: {
    "KEEPER_ROLE()": FunctionFragment;
    "REPORTER_ROLE()": FunctionFragment;
    "getCollateralTokenAddress()": FunctionFragment;
    "getCollateralTokenLastUpdatedAt()": FunctionFragment;
    "getCollateralTokenPrice()": FunctionFragment;
    "getCollateralTokenPriceGranularity()": FunctionFragment;
    "getCollateralizationRatio()": FunctionFragment;
    "getDebtTokenAddress()": FunctionFragment;
    "getDebtTokenLastUpdatedAt()": FunctionFragment;
    "getDebtTokenPrice()": FunctionFragment;
    "getDebtTokenPriceGranularity()": FunctionFragment;
    "getInterestRate()": FunctionFragment;
    "getLiquidationPenalty()": FunctionFragment;
    "getName()": FunctionFragment;
    "getOriginationFee()": FunctionFragment;
    "getReserveBalance()": FunctionFragment;
    "getReserveCollateralBalance()": FunctionFragment;
    "getVaultCollateralAmount()": FunctionFragment;
    "getVaultCollateralizationRatio(address)": FunctionFragment;
    "getVaultDebtAmount()": FunctionFragment;
    "getVaultRepayAmount()": FunctionFragment;
    "vaults(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "KEEPER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "REPORTER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCollateralTokenAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCollateralTokenLastUpdatedAt",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCollateralTokenPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCollateralTokenPriceGranularity",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCollateralizationRatio",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDebtTokenAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDebtTokenLastUpdatedAt",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDebtTokenPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDebtTokenPriceGranularity",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getInterestRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getLiquidationPenalty",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getName", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getOriginationFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getReserveBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getReserveCollateralBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getVaultCollateralAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getVaultCollateralizationRatio",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getVaultDebtAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getVaultRepayAmount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "vaults", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "KEEPER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "REPORTER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCollateralTokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCollateralTokenLastUpdatedAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCollateralTokenPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCollateralTokenPriceGranularity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCollateralizationRatio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDebtTokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDebtTokenLastUpdatedAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDebtTokenPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDebtTokenPriceGranularity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getInterestRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLiquidationPenalty",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getName", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getOriginationFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReserveBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReserveCollateralBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVaultCollateralAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVaultCollateralizationRatio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVaultDebtAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVaultRepayAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vaults", data: BytesLike): Result;

  events: {};
}

export class BankStorage extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: BankStorageInterface;

  functions: {
    KEEPER_ROLE(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "KEEPER_ROLE()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    REPORTER_ROLE(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "REPORTER_ROLE()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    getCollateralTokenAddress(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "getCollateralTokenAddress()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    getCollateralTokenLastUpdatedAt(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "getCollateralTokenLastUpdatedAt()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    getCollateralTokenPrice(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "getCollateralTokenPrice()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    getCollateralTokenPriceGranularity(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "getCollateralTokenPriceGranularity()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    getCollateralizationRatio(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "getCollateralizationRatio()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    getDebtTokenAddress(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "getDebtTokenAddress()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    getDebtTokenLastUpdatedAt(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "getDebtTokenLastUpdatedAt()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    getDebtTokenPrice(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "getDebtTokenPrice()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    getDebtTokenPriceGranularity(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "getDebtTokenPriceGranularity()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    getInterestRate(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "getInterestRate()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    getLiquidationPenalty(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "getLiquidationPenalty()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    getName(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "getName()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    getOriginationFee(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "getOriginationFee()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    getReserveBalance(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "getReserveBalance()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    getReserveCollateralBalance(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "getReserveCollateralBalance()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    getVaultCollateralAmount(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "getVaultCollateralAmount()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    getVaultCollateralizationRatio(
      vaultOwner: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getVaultCollateralizationRatio(address)"(
      vaultOwner: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getVaultDebtAmount(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "getVaultDebtAmount()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    getVaultRepayAmount(overrides?: CallOverrides): Promise<{
      principal: BigNumber;
      0: BigNumber;
    }>;

    "getVaultRepayAmount()"(overrides?: CallOverrides): Promise<{
      principal: BigNumber;
      0: BigNumber;
    }>;

    vaults(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      collateralAmount: BigNumber;
      debtAmount: BigNumber;
      createdAt: BigNumber;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
    }>;

    "vaults(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      collateralAmount: BigNumber;
      debtAmount: BigNumber;
      createdAt: BigNumber;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
    }>;
  };

  KEEPER_ROLE(overrides?: CallOverrides): Promise<string>;

  "KEEPER_ROLE()"(overrides?: CallOverrides): Promise<string>;

  REPORTER_ROLE(overrides?: CallOverrides): Promise<string>;

  "REPORTER_ROLE()"(overrides?: CallOverrides): Promise<string>;

  getCollateralTokenAddress(overrides?: CallOverrides): Promise<string>;

  "getCollateralTokenAddress()"(overrides?: CallOverrides): Promise<string>;

  getCollateralTokenLastUpdatedAt(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getCollateralTokenLastUpdatedAt()"(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getCollateralTokenPrice(overrides?: CallOverrides): Promise<BigNumber>;

  "getCollateralTokenPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

  getCollateralTokenPriceGranularity(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getCollateralTokenPriceGranularity()"(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getCollateralizationRatio(overrides?: CallOverrides): Promise<BigNumber>;

  "getCollateralizationRatio()"(overrides?: CallOverrides): Promise<BigNumber>;

  getDebtTokenAddress(overrides?: CallOverrides): Promise<string>;

  "getDebtTokenAddress()"(overrides?: CallOverrides): Promise<string>;

  getDebtTokenLastUpdatedAt(overrides?: CallOverrides): Promise<BigNumber>;

  "getDebtTokenLastUpdatedAt()"(overrides?: CallOverrides): Promise<BigNumber>;

  getDebtTokenPrice(overrides?: CallOverrides): Promise<BigNumber>;

  "getDebtTokenPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

  getDebtTokenPriceGranularity(overrides?: CallOverrides): Promise<BigNumber>;

  "getDebtTokenPriceGranularity()"(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getInterestRate(overrides?: CallOverrides): Promise<BigNumber>;

  "getInterestRate()"(overrides?: CallOverrides): Promise<BigNumber>;

  getLiquidationPenalty(overrides?: CallOverrides): Promise<BigNumber>;

  "getLiquidationPenalty()"(overrides?: CallOverrides): Promise<BigNumber>;

  getName(overrides?: CallOverrides): Promise<string>;

  "getName()"(overrides?: CallOverrides): Promise<string>;

  getOriginationFee(overrides?: CallOverrides): Promise<BigNumber>;

  "getOriginationFee()"(overrides?: CallOverrides): Promise<BigNumber>;

  getReserveBalance(overrides?: CallOverrides): Promise<BigNumber>;

  "getReserveBalance()"(overrides?: CallOverrides): Promise<BigNumber>;

  getReserveCollateralBalance(overrides?: CallOverrides): Promise<BigNumber>;

  "getReserveCollateralBalance()"(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getVaultCollateralAmount(overrides?: CallOverrides): Promise<BigNumber>;

  "getVaultCollateralAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

  getVaultCollateralizationRatio(
    vaultOwner: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getVaultCollateralizationRatio(address)"(
    vaultOwner: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getVaultDebtAmount(overrides?: CallOverrides): Promise<BigNumber>;

  "getVaultDebtAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

  getVaultRepayAmount(overrides?: CallOverrides): Promise<BigNumber>;

  "getVaultRepayAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

  vaults(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<{
    collateralAmount: BigNumber;
    debtAmount: BigNumber;
    createdAt: BigNumber;
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
  }>;

  "vaults(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<{
    collateralAmount: BigNumber;
    debtAmount: BigNumber;
    createdAt: BigNumber;
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
  }>;

  callStatic: {
    KEEPER_ROLE(overrides?: CallOverrides): Promise<string>;

    "KEEPER_ROLE()"(overrides?: CallOverrides): Promise<string>;

    REPORTER_ROLE(overrides?: CallOverrides): Promise<string>;

    "REPORTER_ROLE()"(overrides?: CallOverrides): Promise<string>;

    getCollateralTokenAddress(overrides?: CallOverrides): Promise<string>;

    "getCollateralTokenAddress()"(overrides?: CallOverrides): Promise<string>;

    getCollateralTokenLastUpdatedAt(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getCollateralTokenLastUpdatedAt()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCollateralTokenPrice(overrides?: CallOverrides): Promise<BigNumber>;

    "getCollateralTokenPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

    getCollateralTokenPriceGranularity(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getCollateralTokenPriceGranularity()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCollateralizationRatio(overrides?: CallOverrides): Promise<BigNumber>;

    "getCollateralizationRatio()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDebtTokenAddress(overrides?: CallOverrides): Promise<string>;

    "getDebtTokenAddress()"(overrides?: CallOverrides): Promise<string>;

    getDebtTokenLastUpdatedAt(overrides?: CallOverrides): Promise<BigNumber>;

    "getDebtTokenLastUpdatedAt()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDebtTokenPrice(overrides?: CallOverrides): Promise<BigNumber>;

    "getDebtTokenPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

    getDebtTokenPriceGranularity(overrides?: CallOverrides): Promise<BigNumber>;

    "getDebtTokenPriceGranularity()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getInterestRate(overrides?: CallOverrides): Promise<BigNumber>;

    "getInterestRate()"(overrides?: CallOverrides): Promise<BigNumber>;

    getLiquidationPenalty(overrides?: CallOverrides): Promise<BigNumber>;

    "getLiquidationPenalty()"(overrides?: CallOverrides): Promise<BigNumber>;

    getName(overrides?: CallOverrides): Promise<string>;

    "getName()"(overrides?: CallOverrides): Promise<string>;

    getOriginationFee(overrides?: CallOverrides): Promise<BigNumber>;

    "getOriginationFee()"(overrides?: CallOverrides): Promise<BigNumber>;

    getReserveBalance(overrides?: CallOverrides): Promise<BigNumber>;

    "getReserveBalance()"(overrides?: CallOverrides): Promise<BigNumber>;

    getReserveCollateralBalance(overrides?: CallOverrides): Promise<BigNumber>;

    "getReserveCollateralBalance()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVaultCollateralAmount(overrides?: CallOverrides): Promise<BigNumber>;

    "getVaultCollateralAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

    getVaultCollateralizationRatio(
      vaultOwner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getVaultCollateralizationRatio(address)"(
      vaultOwner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVaultDebtAmount(overrides?: CallOverrides): Promise<BigNumber>;

    "getVaultDebtAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

    getVaultRepayAmount(overrides?: CallOverrides): Promise<BigNumber>;

    "getVaultRepayAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

    vaults(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      collateralAmount: BigNumber;
      debtAmount: BigNumber;
      createdAt: BigNumber;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
    }>;

    "vaults(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      collateralAmount: BigNumber;
      debtAmount: BigNumber;
      createdAt: BigNumber;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
    }>;
  };

  filters: {};

  estimateGas: {
    KEEPER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    "KEEPER_ROLE()"(overrides?: CallOverrides): Promise<BigNumber>;

    REPORTER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    "REPORTER_ROLE()"(overrides?: CallOverrides): Promise<BigNumber>;

    getCollateralTokenAddress(overrides?: CallOverrides): Promise<BigNumber>;

    "getCollateralTokenAddress()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCollateralTokenLastUpdatedAt(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getCollateralTokenLastUpdatedAt()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCollateralTokenPrice(overrides?: CallOverrides): Promise<BigNumber>;

    "getCollateralTokenPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

    getCollateralTokenPriceGranularity(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getCollateralTokenPriceGranularity()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCollateralizationRatio(overrides?: CallOverrides): Promise<BigNumber>;

    "getCollateralizationRatio()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDebtTokenAddress(overrides?: CallOverrides): Promise<BigNumber>;

    "getDebtTokenAddress()"(overrides?: CallOverrides): Promise<BigNumber>;

    getDebtTokenLastUpdatedAt(overrides?: CallOverrides): Promise<BigNumber>;

    "getDebtTokenLastUpdatedAt()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDebtTokenPrice(overrides?: CallOverrides): Promise<BigNumber>;

    "getDebtTokenPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

    getDebtTokenPriceGranularity(overrides?: CallOverrides): Promise<BigNumber>;

    "getDebtTokenPriceGranularity()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getInterestRate(overrides?: CallOverrides): Promise<BigNumber>;

    "getInterestRate()"(overrides?: CallOverrides): Promise<BigNumber>;

    getLiquidationPenalty(overrides?: CallOverrides): Promise<BigNumber>;

    "getLiquidationPenalty()"(overrides?: CallOverrides): Promise<BigNumber>;

    getName(overrides?: CallOverrides): Promise<BigNumber>;

    "getName()"(overrides?: CallOverrides): Promise<BigNumber>;

    getOriginationFee(overrides?: CallOverrides): Promise<BigNumber>;

    "getOriginationFee()"(overrides?: CallOverrides): Promise<BigNumber>;

    getReserveBalance(overrides?: CallOverrides): Promise<BigNumber>;

    "getReserveBalance()"(overrides?: CallOverrides): Promise<BigNumber>;

    getReserveCollateralBalance(overrides?: CallOverrides): Promise<BigNumber>;

    "getReserveCollateralBalance()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVaultCollateralAmount(overrides?: CallOverrides): Promise<BigNumber>;

    "getVaultCollateralAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

    getVaultCollateralizationRatio(
      vaultOwner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getVaultCollateralizationRatio(address)"(
      vaultOwner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVaultDebtAmount(overrides?: CallOverrides): Promise<BigNumber>;

    "getVaultDebtAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

    getVaultRepayAmount(overrides?: CallOverrides): Promise<BigNumber>;

    "getVaultRepayAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

    vaults(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "vaults(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    KEEPER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "KEEPER_ROLE()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    REPORTER_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "REPORTER_ROLE()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getCollateralTokenAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getCollateralTokenAddress()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCollateralTokenLastUpdatedAt(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getCollateralTokenLastUpdatedAt()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCollateralTokenPrice(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getCollateralTokenPrice()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCollateralTokenPriceGranularity(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getCollateralTokenPriceGranularity()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCollateralizationRatio(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getCollateralizationRatio()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDebtTokenAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getDebtTokenAddress()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDebtTokenLastUpdatedAt(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getDebtTokenLastUpdatedAt()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDebtTokenPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getDebtTokenPrice()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDebtTokenPriceGranularity(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getDebtTokenPriceGranularity()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getInterestRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getInterestRate()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLiquidationPenalty(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getLiquidationPenalty()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getName(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getName()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getOriginationFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getOriginationFee()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReserveBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getReserveBalance()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReserveCollateralBalance(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getReserveCollateralBalance()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVaultCollateralAmount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getVaultCollateralAmount()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVaultCollateralizationRatio(
      vaultOwner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getVaultCollateralizationRatio(address)"(
      vaultOwner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVaultDebtAmount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getVaultDebtAmount()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVaultRepayAmount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getVaultRepayAmount()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    vaults(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "vaults(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
