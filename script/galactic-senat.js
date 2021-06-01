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

   getName() {
      return this._name;
   }

   setName(name) {
      this._name = name;
   }

   getLocationOfHQ() {
      return this._locationOfHQ;
   }

   setLocationOfHQ(locationOfHQ) {
      this._locationOfHQ = locationOfHQ;
   }

   getLeaderName() {
      return this._leaderName;
   }

   setLeaderName(leaderName) {
      this._leaderName = leaderName;
   }

   requestHelp(jediOrder) {
      return `We should ask ${jediOrder.getName()} to help us!`;
   }
}