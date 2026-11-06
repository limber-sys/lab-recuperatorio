
const fetchPersonajes = async () => {
  const respuesta = await fetch(
    "https://rickandmortyapi.com/api/character"
  );

  if (!respuesta.ok) {
    throw new Error("Error al cargar los personajes");
  }

  const data = await respuesta.json();

  return data.results;
};

export default fetchPersonajes;
