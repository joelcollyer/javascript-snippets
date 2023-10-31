/**
 * Prompt: Using the PokéAPI (or your own local setup) write a function that
 * takes in a Pokémon type, and returns what that type is weak against,
 * and strong against.
 */

const https = require("https");

const types = [
  {
    name: "normal",
    url: "https://pokeapi.co/api/v2/type/1/",
  },
  {
    name: "fighting",
    url: "https://pokeapi.co/api/v2/type/2/",
  },
  {
    name: "flying",
    url: "https://pokeapi.co/api/v2/type/3/",
  },
  {
    name: "poison",
    url: "https://pokeapi.co/api/v2/type/4/",
  },
  {
    name: "ground",
    url: "https://pokeapi.co/api/v2/type/5/",
  },
  {
    name: "rock",
    url: "https://pokeapi.co/api/v2/type/6/",
  },
  {
    name: "bug",
    url: "https://pokeapi.co/api/v2/type/7/",
  },
  {
    name: "ghost",
    url: "https://pokeapi.co/api/v2/type/8/",
  },
  {
    name: "steel",
    url: "https://pokeapi.co/api/v2/type/9/",
  },
  {
    name: "fire",
    url: "https://pokeapi.co/api/v2/type/10/",
  },
  {
    name: "water",
    url: "https://pokeapi.co/api/v2/type/11/",
  },
  {
    name: "grass",
    url: "https://pokeapi.co/api/v2/type/12/",
  },
  {
    name: "electric",
    url: "https://pokeapi.co/api/v2/type/13/",
  },
  {
    name: "psychic",
    url: "https://pokeapi.co/api/v2/type/14/",
  },
  {
    name: "ice",
    url: "https://pokeapi.co/api/v2/type/15/",
  },
  {
    name: "dragon",
    url: "https://pokeapi.co/api/v2/type/16/",
  },
  {
    name: "dark",
    url: "https://pokeapi.co/api/v2/type/17/",
  },
  {
    name: "fairy",
    url: "https://pokeapi.co/api/v2/type/18/",
  },
  {
    name: "unknown",
    url: "https://pokeapi.co/api/v2/type/10001/",
  },
  {
    name: "shadow",
    url: "https://pokeapi.co/api/v2/type/10002/",
  },
];

const getJSON = (url = "") => {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let body = "";
        res.on("data", (chunk) => (body += chunk));
        res.on("end", () => resolve(JSON.parse(body)));
      })
      .on("error", (error) => reject(error));
  });
};

const formatAsString = (damageGroup = [{ name: "", url: "" }]) => {
  return damageGroup.map(({ name }, i) => `${i === damageGroup.length - 1 ? "and " : ""}${name}`).join(", ");
};

const typeMatchup = async (type = "") => {
  const { url } = types.find(({ name }) => name === type) || {};

  if (!url) return `"${type}" is not a valid Pokémon type!`;

  const response = await getJSON(url);
  const { damage_relations: damageRelations } = response || {};
  const { double_damage_from: weaknesses = [], double_damage_to: strengths = [] } = damageRelations || {};

  return `Weak against ${formatAsString(weaknesses)}. Strong against ${formatAsString(strengths)}.`;
};

typeMatchup("fighting").then((out) => console.log(out)); // Weak against flying, psychic, and fairy. Strong against normal, rock, steel, ice, and dark.
typeMatchup("cassidy").then((out) => console.log(out)); // "cassidy" is not a valid Pokémon type!
