/**
 * Class JediOrder
 * @param {String} name
 * @param {Boolean} inWarWithSith
 * @param {Boolean} hasAcademy
 */

class JediOrder {
  constructor(name, inWarWithSith, hasAcademy) {
    this._name = name;
    this._inWarWithSith = inWarWithSith;
    this._hasAcademy = hasAcademy;
    this._jediList = [];
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get inWarWithSith() {
    return this._fear;
  }

  set inWarWithSith(fear) {
    this._fear = fear;
  }

  get hasAcademy() {
    return this._fear;
  }

  set hasAcademy(hasAcademy) {
    this._hasAcademy = hasAcademy;
  }

  get jediList() {
    return this._jediList;
  }

  getJediWithPadavan() {
    const jediWithPadavanArr = this._jediList.filter((jedi) =>
      jedi.hasPadavan
    );
    return jediWithPadavanArr;
  }

  getJediByType(type) {
    const currentTypeOfJediArr = this._jediList.filter(
      (jedi) => jedi.typeofKight === type
    );
    return currentTypeOfJediArr;
  }

  devoteJedi(jedi) {
    this._jediList.push(jedi);
  }

  expeleJedi(jedi) {
    const index = this._jediList.indexOf(jedi);
    if (index > -1) {
      return this._jediList.splice(index, 1);
    }
    return null;
  }

  order66(cb) {
    const atack = () => {
      this._jediList.pop();
      console.log(this.jediList);
      if (this._jediList.length >= 4) {
        setTimeout(atack, 999);
      } else {
        cb();
      }
    };
    setTimeout(
      atack,
      999
    );
  }
}
