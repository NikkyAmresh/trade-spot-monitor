import Trigger from "./src/Services/Trigger";
import config from "./src/config";

const trigger = new Trigger(config.tradePairs);

trigger.listenStream();
