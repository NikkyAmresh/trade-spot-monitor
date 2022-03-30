// 'ETHBTC',   'LTCBTC',   'BNBBTC',   'NEOBTC',  'QTUMETH', 'EOSETH',
//   'SNTETH',   'BNTETH',   'BCCBTC',   'GASBTC',  'BNBETH',  'BTCUSDT',
//   'ETHUSDT',  'HSRBTC',   'OAXETH',   'DNTETH',  'MCOETH',  'ICNETH',
//   'MCOBTC',   'WTCBTC',   'WTCETH',   'LRCBTC',  'LRCETH',  'QTUMBTC',
//   'YOYOBTC',  'OMGBTC',   'OMGETH',   'ZRXBTC',  'ZRXETH',  'STRATBTC',
//   'STRATETH', 'SNGLSBTC', 'SNGLSETH', 'BQXBTC',  'BQXETH',  'KNCBTC',
//   'KNCETH',   'FUNBTC',   'FUNETH',   'SNMBTC',  'SNMETH',  'NEOETH',
//   'IOTABTC',  'IOTAETH',  'LINKBTC',  'LINKETH', 'XVGBTC',  'XVGETH',
//   'SALTBTC',  'SALTETH',  'MDABTC',   'MDAETH',  'MTLBTC',  'MTLETH',
//   'SUBBTC',   'SUBETH',   'EOSBTC',   'SNTBTC',  'ETCETH',  'ETCBTC',
//   'MTHBTC',   'MTHETH',   'ENGBTC',   'ENGETH',  'DNTBTC',  'ZECBTC',
//   'ZECETH',   'BNTBTC',   'ASTBTC',   'ASTETH',  'DASHBTC', 'DASHETH',
//   'OAXBTC',   'ICNBTC',   'BTGBTC',   'BTGETH',  'EVXBTC',  'EVXETH',
//   'REQBTC',   'REQETH',   'VIBBTC',   'VIBETH',  'HSRETH',  'TRXBTC',
//   'TRXETH',   'POWRBTC',  'POWRETH',  'ARKBTC',  'ARKETH',  'YOYOETH',
//   'XRPBTC',   'XRPETH',   'MODBTC',   'MODETH',  'ENJBTC',  'ENJETH',
//   'STORJBTC', 'STORJETH', 'BNBUSDT',  'VENBNB',
import Action from "./Services/Action";

const comparisonOperators = Action.comparisonOperators;

const tradePairs = [
  {
    streamName: "btcusdt",
    comparisonOperator: comparisonOperators.lt,
    value: 47435.5,
  },
  {
    streamName: "ethbtc",
    comparisonOperator: comparisonOperators.gt,
    value: 40000,
  },
  {
    streamName: "etcbtc",
    comparisonOperator: comparisonOperators.gt,
    value: 40000,
  },
  {
    streamName: "ethusdt",
    comparisonOperator: comparisonOperators.gt,
    value: 40000,
  },
  {
    streamName: "omgbtc",
    comparisonOperator: comparisonOperators.gt,
    value: 40000,
  },
];

module.exports = { tradePairs, comparisonOperators };
