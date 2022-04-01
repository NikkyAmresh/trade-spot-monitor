import Trigger from "./src/Services/Trigger";
import config from "./src/config";
import PriceOracle from "./src/Services/PriceOracle";
import Action from "./src/Services/Action";

const logger = (a: any) => console.log('logtest: ', a)

const priceOracle = new PriceOracle(
    `ws`,
    {
        price: "p",
        entityName: "s",
        timestamp: "T",
    },
    "wss://stream.binance.com:9443/"
);

const logAction = new Action(logger);

const trigger = new Trigger(config.tradePairs, priceOracle, logAction);

trigger.listenStream();
