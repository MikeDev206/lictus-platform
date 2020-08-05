const urlBase = 'https://pokeapi.co/api/v2/pokemon'

async function getPokemonByName(name) {
  const response = await fetch(`${urlBase}/${name}`)
  const parsedJson = await response.json()
  return parsedJson;
}



function getPokemonById(id){}