/**
 * Class GalacticSenat
 * @param {String} name 
 * @param {String} locationOfHQ 
 * @param {String} leaderName 
 */

 class GalacticSenat {
   constructor(name, locationOfHQ, leaderName) {
      this._name = name;
      this._locationOfHQ = locationOfHQ;
      this._leaderName = leaderName;
   }

   get name() {
      return this._name;
   }

   set name(name) {
      this._name = name;
   }

   get locationOfHQ() {
      return this._locationOfHQ;
   }

   set locationOfHQ(locationOfHQ) {
      this._locationOfHQ = locationOfHQ;
   }

   get leaderName() {
      return this._leaderName;
   }

   set leaderName(leaderName) {
      this._leaderName = leaderName;
   }

   requestHelp(jediOrder) {
      return `We should ask ${jediOrder.name} to help us!`;
   }
}