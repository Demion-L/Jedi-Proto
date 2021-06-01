var obivanKenoby = new JediKnight(
  "Obivan Kenoby",
  550,
  4,
  3,
  4,
  "guardian",
  true,
  6000
);
var enakinSkywalker = new JediKnight(
  "Enakin Skywalker",
  950,
  3,
  -2,
  3,
  "sentinel",
  false,
  1500
);
var maceWindu = new JediKnight(
  "Mace Windu",
  650,
  4,
  -3,
  2,
  "guardian",
  true,
  6000
);
var yoda = new JediKnight("Yoda", 1250, 5, 0, 4, "consular", false, 120000);
var lukeSkywalker = new JediKnight(
  "Luke Skywalker",
  950,
  3,
  3,
  5,
  "guardian",
  false,
  6000
);
var ploKun = new JediKnight("Plo Koon", 650, 4, 3, 4, "sentinel", true, 6000);
var ahsokaTano = new JediKnight(
  "Ahsoka Tano",
  450,
  3,
  2,
  4,
  "consular",
  false,
  3000
);
var quiGon = new JediKnight(
  "Qui-Gon Jinn",
  750,
  5,
  5,
  5,
  "consular",
  true,
  8000
);
var kitFisto = new JediKnight(
  "Kit Fisto",
  550,
  3,
  1,
  2,
  "guardian",
  false,
  5500
);
var kiAdiMundi = new JediKnight(
  "Ki-Adi-Mundi",
  550,
  3,
  1,
  2,
  "sentinel",
  true,
  5500
);

var prostoVasia = new JediKnight("Vasia", 5, 3, 1, 2, "sentinel", false, 5);

var jSquad = [
  obivanKenoby,
  yoda,
  enakinSkywalker,
  maceWindu,
  lukeSkywalker,
  ploKun,
  ahsokaTano,
  quiGon,
  kitFisto,
  kiAdiMundi,
];

var jediOrder = new JediOrder("Order of New Republick", true, true);
console.dir(jediOrder);

jSquad.forEach(function(element) {
  jediOrder.devoteJedi(element);
});
