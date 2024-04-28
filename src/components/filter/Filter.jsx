import "./filter.scss";

function Filter() {
  return (
    <div className="filter">
      <h1>
        Résultats pour <b>Londres</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Ville</label>
          <input type="text" id="city" name="city" placeholder="Ville" />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Action</label>
          <select name="type" id="type">
            <option value="">Aucune</option>
            <option value="buy">Acheter</option>
            <option value="rent">Louer</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Bien Immobilier</label>
          <select name="property" id="property">
            <option value="">Aucune</option>
            <option value="apartment">Appartement</option>
            <option value="house">Maison</option>
            <option value="land">Terrain</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Budget min</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="aucun"
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Budget max</label>
          <input
            type="text"
            id="maxPrice"
            name="maxPrice"
            placeholder="Aucun"
          />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Chambres</label>
          <input type="text" id="bedroom" name="bedroom" placeholder="Aucune" />
        </div>
        <button>
          <img src="/search.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Filter;
