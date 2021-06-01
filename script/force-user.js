/**
 * Class ForceUser
 * @param {String} name
 * @param {Number} amountOFMDCL
 */

 function ForceUser(name, amountOFMDCL) {
   this._name = name;
   this._amountOFMDCL = amountOFMDCL;
 }
 
 ForceUser.prototype.getName = function () {
   return this._name;
 };
 
 ForceUser.prototype.setName = function (name) {
   this._name = name;
 };
 
 ForceUser.prototype.getAmountOFMDCL = function () {
   return this._amountOFMDCL;
 };
 
 