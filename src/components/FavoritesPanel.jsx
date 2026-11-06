
const FavoritesPanel = ({ favoritos, onQuitarFavorito }) => {
  return (
    <aside className="favoritos">
      <h3>Favoritos ({favoritos.length})</h3>

      {favoritos.length === 0 ? (
        <p>Aun no has marcado favoritos</p>
      ) : (
        <ul>
          {favoritos.map((personaje) => (
            <li key={personaje.id}>
              <img
                src={personaje.image}
                alt={personaje.name}
              />

              <span>{personaje.name}</span>

              <button
                onClick={() => onQuitarFavorito(personaje.id)}
              >
                Quitar
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
};

export default FavoritesPanel;
