import { level } from '../app';

const lifeHero = [
  [{ name: "мечник", health: 10 }, "critical"],
  [{ name: "лучник", health: 30 }, "wounded"],
  [{ name: "Маг", health: 55 }, "healthy"],
];
  
test.each(lifeHero)("health test", (hero, expected) => {
  const result = level(hero);
  console.log(result)
  expect(result).toEqual(expected);
  });
