import logger from "../lib/logger";

class Action {
  static comparisonOperators: comparisonOperator = {
    gt: ">",
    eq: "===",
    lt: "<",
    lte: "<=",
    gte: ">=",
  };
  operator: String;
  triggerValue: Number;
  currentValue: Number;
  params: any;

  constructor(operator: String, triggerValue: any, currentValue: any, params: any) {
    this.operator = operator;
    this.triggerValue = triggerValue;
    this.currentValue = currentValue;
    this.params = params;
  }

  compare() {
    const operators = Action.comparisonOperators;
    switch (this.operator) {
      case operators.eq:
        return this.currentValue === this.triggerValue;
      case operators.gt:
        return this.currentValue > this.triggerValue;
      case operators.lt:
        return this.currentValue < this.triggerValue;
      case operators.lte:
        return this.currentValue <= this.triggerValue;
      case operators.gte:
        return this.currentValue >= this.triggerValue;
      default:
        return false;
    }
  }

  listen() {
    if (this.compare()) {
      logger.info(
        `[Alert ${this.params.s}@${this.params.e}] current[${new Date(
          this.params.T
        ).toUTCString()}]:${this.params.p} | ${this.params.s} is ${this.operator
        } ${this.triggerValue}`
      );
    }
  }
}

export default Action;
