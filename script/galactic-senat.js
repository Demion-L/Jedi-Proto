
/**
 * Class GalacticSenat
 * @param {String} name 
 * @param {String} locationOfHQ 
 * @param {String} leaderName 
 */

 function GalacticSenat(name, locationOfHQ, leaderName) {
	this._name = name;
	this._locationOfHQ = locationOfHQ;
	this._leaderName = leaderName;
 }

 GalacticSenat.prototype.getName = function () {
	return this._name;
 };
 
 GalacticSenat.prototype.setName = function (name) {
	this._name = name;
 };

 GalacticSenat.prototype.getLocationOfHQ = function () {
	return this._locationOfHQ;
 };
 
 GalacticSenat.prototype.setLocationOfHQ = function (locationOfHQ) {
	this._locationOfHQ = locationOfHQ;
 };
 
 GalacticSenat.prototype.getLeaderName = function () {
	return this._leaderName;
 };
 
 GalacticSenat.prototype.setLeaderName = function (leaderName) {
	this._leaderName = leaderName;
 };

 GalacticSenat.prototype.requestHelp = function (jediOrder) {
	return "We should ask " + jediOrder.getName() + " to help us!";
 };