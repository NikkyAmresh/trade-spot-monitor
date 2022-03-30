import Trigger from "./Services/Trigger";
import { tradePairs } from "./config";

const trigger = new Trigger(tradePairs);

trigger.listenStream();
