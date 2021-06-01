/**
 * Class ForceUser
 * @param {String} name
 * @param {Number} amountOFMDCL
 */

 class ForceUser {
  constructor(name, amountOFMDCL) {
    this._name = name;
    this._amountOFMDCL = amountOFMDCL;
  }

  getName() {
    return this._name;
  }

  setName(name) {
    this._name = name;
  }

  getAmountOFMDCL() {
    return this._amountOFMDCL;
  }
}
 