#!/usr/bin/env node

import PriceOracle from "./PriceOracle";
import Action from "./Action";

class Trigger {
  constructor(tradePairs = []) {
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

    const previousPrices = {};
    socketClient.setHandler("trade", (params) => {
      const tradePair = this.tradePairs.find(
        (x) => x.streamName.toLowerCase() === params.s.toLowerCase()
      );

      if (
        !previousPrices[params.s] ||
        (previousPrices[params.s] && previousPrices[params.s] !== params.p)
      ) {
        const action = new Action(
          tradePair.comparisonOperator,
          tradePair.value,
          params.p,
          params
        );
        action.listen();
        previousPrices[params.s] = params.p;
      }
    });
  }
}

export default Trigger;
