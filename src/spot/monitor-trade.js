#!/usr/bin/env node

import SocketClient from "../lib/socketClient";
const Binance = require("node-binance-api");

// const streamName = "ethbtc";

const k = (streamName) => {
  const socketClient = new SocketClient(
    `ws/${streamName}@trade`,
    "wss://stream.binance.com:9443/"
  );

  socketClient.setHandler("trade", (params) => {
    console.log(`[Spot ${streamName}] current:${params.p} `);
  });
};

// const binance = new Binance().options({
//   APIKEY: "<key>",
//   APISECRET: "<secret>",
// });
// (async () => {
//   let ticker = await binance.prices();
//   const sts = Object.keys(ticker);
//   sts.forEach((stream) => {
//     k(stream);
//   });
// })();
