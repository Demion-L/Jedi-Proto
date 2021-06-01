const obivanKenoby = new JediKnight(
  "Obivan Kenoby",
  550,
  4,
  3,
  4,
  "guardian",
  true,
  6000
);
const enakinSkywalker = new JediKnight(
  "Enakin Skywalker",
  950,
  3,
  -2,
  3,
  "sentinel",
  false,
  1500
);
const maceWindu = new JediKnight(
  "Mace Windu",
  650,
  4,
  -3,
  2,
  "guardian",
  true,
  6000
);
const yoda = new JediKnight("Yoda", 1250, 5, 0, 4, "consular", false, 120000);
const lukeSkywalker = new JediKnight(
  "Luke Skywalker",
  950,
  3,
  3,
  5,
  "guardian",
  false,
  6000
);
const ploKun = new JediKnight("Plo Koon", 650, 4, 3, 4, "sentinel", true, 6000);
const ahsokaTano = new JediKnight(
  "Ahsoka Tano",
  450,
  3,
  2,
  4,
  "consular",
  false,
  3000
);
const quiGon = new JediKnight(
  "Qui-Gon Jinn",
  750,
  5,
  5,
  5,
  "consular",
  true,
  8000
);
const kitFisto = new JediKnight(
  "Kit Fisto",
  550,
  3,
  1,
  2,
  "guardian",
  false,
  5500
);
const kiAdiMundi = new JediKnight(
  "Ki-Adi-Mundi",
  550,
  3,
  1,
  2,
  "sentinel",
  true,
  5500
);

const prostoVasia = new JediKnight("Vasia", 5, 3, 1, 2, "sentinel", false, 5);

const jSquad = [
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

const jediOrder = new JediOrder("Order of New Republick", true, true);
console.dir(jediOrder);

jSquad.forEach(element => {
  jediOrder.devoteJedi(element);
});

  