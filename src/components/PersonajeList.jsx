
import PersonajeCard from "./PersonajeCard";

const PersonajeList = ({
  personajes,
  favoritos,
  onToggleFavorito
}) => {
  return (
    <section className="grid">
      {personajes.map((personaje) => {
        const esFavorito = favoritos.some(
          (favorito) => favorito.id === personaje.id
        );

        return (
          <PersonajeCard
            key={personaje.id}
            personaje={personaje}
            esFavorito={esFavorito}
            onToggleFavorito={onToggleFavorito}
          />
        );
      })}
    </section>
  );
};

export default PersonajeList;
