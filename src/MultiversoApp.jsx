
import { useState } from "react";
import usePersonajes from "./hooks/usePersonajes";
import PersonajeList from "./components/PersonajeList";
import FavoritesPanel from "./components/FavoritesPanel";

const MultiversoApp = () => {
  const { personajes, loading, error } = usePersonajes();

  const [favoritos, setFavoritos] = useState([]);

  const toggleFavorito = (personaje) => {
    const existe = favoritos.some(
      (favorito) => favorito.id === personaje.id
    );

    if (existe) {
      setFavoritos(
        favoritos.filter(
          (favorito) => favorito.id !== personaje.id
        )
      );
    } else {
      setFavoritos([...favoritos, personaje]);
    }
  };

  const quitarFavorito = (id) => {
    setFavoritos(
      favoritos.filter((favorito) => favorito.id !== id)
    );
  };

  return (
    <main>
      <h1>Rick and Morty Universo</h1>

      {loading ? (
        <p className="mensaje">Cargando...</p>
      ) : error ? (
        <p className="mensaje error">
          Error al cargar los personajes
        </p>
      ) : (
        <div className="layout">
          <PersonajeList
            personajes={personajes}
            favoritos={favoritos}
            onToggleFavorito={toggleFavorito}
          />

          <FavoritesPanel
            favoritos={favoritos}
            onQuitarFavorito={quitarFavorito}
          />
        </div>
      )}
    </main>
  );
};

export default MultiversoApp;
