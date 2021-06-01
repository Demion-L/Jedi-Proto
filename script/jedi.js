/**
 * Class Jedi -> ForceUser
 * @param {Number} fear
 * @param {Number} rage
 * @param {Number} kindness
 */

class Jedi extends ForceUser {
  constructor(name, amountOFMDCL, fear, rage, kindness) {
    super(name, amountOFMDCL);
    this._fear = fear;
    this._rage = rage;
    this._kindness = kindness;
  }

  getFear() {
    return this._fear;
  }

  setFear(fear) {
    this._fear = fear;
  }

  getRage() {
    return this._rage;
  }

  setRage(rage) {
    this._rage = rage;
  }

  getKindness() {
    return this._kindness;
  }

  setKindness(kindness) {
    this._kindness = kindness;
  }

  fight() {
    console.log(`Jedi ${this._name} start to fight`);
  }

  useForce() {
    console.log(`Jedi ${this._name} is using Force!`);
  }

  side(rage, fear, kindness) {
    const ballance = this._rage + this._fear + this._kindness;
    let sideIs;
    if (ballance > 3) {
      sideIs = "bright";
    } else if (ballance < -3) {
      sideIs = "dark";
    } else {
      sideIs = "grey";
    }
    return sideIs;
  }
}
