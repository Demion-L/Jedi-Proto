
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

  get typeofKight() {
    return this._typeofKight;
  }

  get hasPadavan() {
    return this._hasPadavan;
  }

  set hasPadavan(hasPadavan) {
    this._hasPadavan = hasPadavan;
  }

  get experiance() {
    return this._experiance;
  }

  set experiance(experiance) {
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
 