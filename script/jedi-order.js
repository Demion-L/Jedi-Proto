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

  getName() {
    return this._name;
  }

  setName(name) {
    this._name = name;
  }

  getinWarWithSith() {
    return this._fear;
  }

  setinWarWithSith(fear) {
    this._fear = fear;
  }

  getHasAcademy() {
    return this._fear;
  }

  setHasAcademy(hasAcademy) {
    this._hasAcademy = hasAcademy;
  }

  getJediList() {
    return this._jediList;
  }

  getJediWithPadavan() {
    const JediWithPadavanArr = this._jediList.filter(jedi => jedi.getHasPadavan());
    return JediWithPadavanArr;
  }

  getJediByType(type) {
    const currentTypeOfJediArr = this._jediList.filter(jedi => jedi.getTypeofKight() === type);
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
    setTimeout(
      function atack() {
        this._jediList.pop();
        // console.log(this.getJediList());
        if (this._jediList.length >= 4) {
          setTimeout(atack.bind(this), 999);
         } else {
          cb();
        }
      }.bind(this),
      999
    );
  }
}
