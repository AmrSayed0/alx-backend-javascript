// 4-pricing.js
import Currency from "./3-currency.js";

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (typeof newAmount === "number") {
      this._amount = newAmount;
    } else {
      throw new Error("Invalid data type. Amount must be a number.");
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (newCurrency instanceof Currency) {
      this._currency = newCurrency;
    } else {
      throw new Error(
        "Invalid data type. Currency must be an instance of Currency class."
      );
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount === "number" && typeof conversionRate === "number") {
      return amount * conversionRate;
    } else {
      throw new Error(
        "Invalid data type. Amount and conversionRate must be numbers."
      );
    }
  }
}
