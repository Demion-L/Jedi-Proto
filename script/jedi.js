/**
  * Class Jedi -> ForceUser
  * @param {Number} fear
  * @param {Number} rage
  * @param {Number} kindness
  */
 
 function Jedi(name, amountOFMDCL, fear, rage, kindness) {
   ForceUser.call(this, name, amountOFMDCL);
   this._fear = fear;
   this._rage = rage;
   this._kindness = kindness;
 }
 
 Jedi.prototype = Object.create(ForceUser.prototype);
 Jedi.prototype.constructor = Jedi;
 
 Jedi.prototype.getFear = function () {
   return this._fear;
 };
 
 Jedi.prototype.setFear = function (fear) {
   this._fear = fear;
 };
 
 Jedi.prototype.getRage = function () {
   return this._rage;
 };
 
 Jedi.prototype.setRage = function (rage) {
   this._rage = rage;
 };
 
 Jedi.prototype.getKindness = function () {
   return this._kindness;
 };
 
 Jedi.prototype.setKindness = function (kindness) {
   this._kindness = kindness;
 };
 
 Jedi.prototype.fight = function () {
   console.log("Jedi " + this._name + " start to fight");
 };
 
 Jedi.prototype.useForce = function () {
   console.log("Jedi " + this._name + " is using Force!");
 };
 
 Jedi.prototype.side = function (rage, fear, kindness) {
   var ballance = this._rage + this._fear + this._kindness;
   var sideIs = "";
   if (ballance > 3) {
     sideIs = "bright";
   } else if (ballance < -3) {
     sideIs = "dark";
   } else {
     sideIs = "grey";
   }
   return sideIs;
 };
 