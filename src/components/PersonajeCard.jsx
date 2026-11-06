
const PersonajeCard = ({
  personaje,
  esFavorito,
  onToggleFavorito
}) => {
  return (
    <article className={`card ${esFavorito ? "fav" : ""}`}>
      <img
        src={personaje.image}
        alt={personaje.name}
      />

      <h4>{personaje.name}</h4>

      <p className={`estado estado-${personaje.status.toLowerCase()}`}>
        {personaje.status} - {personaje.species}
      </p>

      <button onClick={() => onToggleFavorito(personaje)}>
        {esFavorito
          ? "★ Quitar de favoritos"
          : "☆ Agregar a favoritos"}
      </button>
    </article>
  );
};

export default PersonajeCard;
