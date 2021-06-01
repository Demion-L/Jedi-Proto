/**
 * Class JediKnight -> Jedi
 * @param{String} typeofKight
 * @param{Boolean} hasPadavan
 * @param{Number} experiance
 */

 function JediKnight(
   name,
   amountOFMDCL,
   fear,
   rage,
   kindness,
   typeofKight,
   hasPadavan,
   experiance
   ) {
     Jedi.call(this, name, amountOFMDCL, fear, rage, kindness);
     this._typeofKight = typeofKight;
     this._hasPadavan = hasPadavan;
     this._experiance = experiance;
   }
   
   JediKnight.prototype = Object.create(Jedi.prototype);
   JediKnight.prototype.constructor = JediKnight;
 
 JediKnight.prototype.getTypeofKight = function () {
   return this._typeofKight;
 };
 
 JediKnight.prototype.getHasPadavan = function () {
   return this._hasPadavan;
 };
 
 JediKnight.prototype.setHasPadavan = function (hasPadavan) {
   this._hasPadavan = hasPadavan;
 };
 
 JediKnight.prototype.getExperiance = function () {
   return this._experiance;
 };
 
 JediKnight.prototype.setExperiance = function (experiance) {
   this._experiance = experiance;
 };
 
 JediKnight.prototype.canBeMagister = function () {
   if (this._experiance > 5000) {
     return true;
   } else {
     return false;
   }
 };
 
  