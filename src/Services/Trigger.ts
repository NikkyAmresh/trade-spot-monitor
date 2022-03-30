#!/usr/bin/env node

import PriceOracle from "./PriceOracle";
import Action from "./Action";

class Trigger {
  tradePairs: tradePair[];

  constructor(tradePairs: tradePair[]) {
    this.tradePairs = tradePairs;
  }
  listenStream() {
    const socketClient = new PriceOracle(
      `ws`,
      "wss://stream.binance.com:9443/"
    );

    this.tradePairs.forEach((pair) => {
      socketClient.subscribeStream(pair.streamName);
    });

    const previousPrices: { [key: string]: Number } = {};
    socketClient.setHandler("trade", (params: { s: string; p: any; }) => {
      const tradePair = this.tradePairs.find(
        (x) => x.streamName.toLowerCase() === params.s.toLowerCase()
      );

      if (
        !previousPrices[params.s] ||
        (previousPrices[params.s] && previousPrices[params.s] !== params.p)
      ) {
        if (tradePair) {
          const action = new Action(
            tradePair.comparisonOperator,
            tradePair.value,
            params.p,
            params
          );

          action.listen();
          previousPrices[params.s] = params.p;
        }
      }
    });
  }
}

export default Trigger;
