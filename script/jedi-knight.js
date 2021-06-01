
/**
 * Class JediKnight -> Jedi
 * @param{String} typeofKight
 * @param{Boolean} hasPadavan
 * @param{Number} experiance
 */

 class JediKnight extends Jedi {
  constructor(
    name,
    amountOFMDCL,
    fear,
    rage,
    kindness,
    typeofKight,
    hasPadavan,
    experiance
  ) {
      super(name, amountOFMDCL, fear, rage, kindness);
      this._typeofKight = typeofKight;
      this._hasPadavan = hasPadavan;
      this._experiance = experiance;
    }

  getTypeofKight() {
    return this._typeofKight;
  }

  getHasPadavan() {
    return this._hasPadavan;
  }

  setHasPadavan(hasPadavan) {
    this._hasPadavan = hasPadavan;
  }

  getExperiance() {
    return this._experiance;
  }

  setExperiance(experiance) {
    this._experiance = experiance;
  }

  canBeMagister() {
    if (this._experiance > 5000) {
      return true;
    } else {
      return false;
    }
  }
}
 