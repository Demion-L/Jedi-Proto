/**
 * Class JediOrder
 * @param {String} name
 * @param {Boolean} inWarWithSith
 * @param {Boolean} hasAcademy
 */

function JediOrder(name, inWarWithSith, hasAcademy) {
  this._name = name;
  this._inWarWithSith = inWarWithSith;
  this._hasAcademy = hasAcademy;
  this._jediList = [];
}

JediOrder.prototype.getName = function () {
  return this._name;
};
JediOrder.prototype.setName = function (name) {
  this._name = name;
};

JediOrder.prototype.getinWarWithSith = function () {
  return this._fear;
};
JediOrder.prototype.setinWarWithSith = function (fear) {
  this._fear = fear;
};

JediOrder.prototype.getHasAcademy = function () {
  return this._fear;
};
JediOrder.prototype.setHasAcademy = function (hasAcademy) {
  this._hasAcademy = hasAcademy;
};

JediOrder.prototype.getJediList = function () {
  return this._jediList;
};

JediOrder.prototype.getJediWithPadavan = function () {
  var JediWithPadavanArr = this._jediList.filter(function (jedi) {
    return jedi.getHasPadavan();
  });
  return JediWithPadavanArr;
};

JediOrder.prototype.getJediByType = function (type) {
  var currentTypeOfJediArr = this._jediList.filter(function (jedi) {
    return jedi.getTypeofKight() === type;
  });
  return currentTypeOfJediArr;
};

JediOrder.prototype.devoteJedi = function (jedi) {
  this._jediList.push(jedi);
};

JediOrder.prototype.expeleJedi = function (jedi) {
  var index = this._jediList.indexOf(jedi);
  if (index > -1) {
    return this._jediList.splice(index, 1);
  }
  return null;
};

JediOrder.prototype.order66 = function (cb) {
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
};
