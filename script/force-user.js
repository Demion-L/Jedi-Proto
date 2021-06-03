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
    get name() {
      return this._name;
    }
    set name(name) {
      this._name = name;
    }

    get amountOFMDCL() {
      return this._amountOFMDCL;
    }
  }
