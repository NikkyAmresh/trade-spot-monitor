#!/usr/bin/env node

import SocketClient from "../lib/socketClient";
import { tradePairs, comparisonOperators } from "../config";

const comparison = (operator, x, y) => {
  switch (operator) {
    case comparisonOperators.eq:
      return x === y;
    case comparisonOperators.gt:
      return x > y;
    case comparisonOperators.lt:
      return x < y;
    case comparisonOperators.lte:
      return x <= y;
    case comparisonOperators.gte:
      return x >= y;
    default:
      return false;
  }
};

const listenStream = () => {
  const socketClient = new SocketClient(`ws`, "wss://stream.binance.com:9443/");

  tradePairs.forEach((pair) => {
    socketClient.subscribeStream(pair.streamName);
  });

  socketClient.setHandler("trade", (params) => {
    const tradePair = tradePairs.find(
      (x) => x.streamName.toLowerCase() === params.s.toLowerCase()
    );
    if (comparison(tradePair.comparisonOperator, params.p, tradePair.value)) {
      console.log(
        `[Alert ${params.s}@${params.e}] current[${new Date(
          params.T
        ).toUTCString()}]:${params.p} | ${params.s} is ${
          tradePair.comparisonOperator
        } ${tradePair.value}`
      );
    } else {
      // console.log(`${params.s} => ${params.p}`);
    }
  });
};

listenStream();
