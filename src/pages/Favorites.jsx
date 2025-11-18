import React from "react";
import AppContext from "../context";
import Card from "../components/Card";
import Info from "../components/Info";

function Favorites() {
  const { favorites, onAddToFavorite } = React.useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои закладки</h1>
      </div>

      {favorites.length > 0 ? (
        <div className="sneakers">
          {favorites.map((item, index) => (
            <Card
              key={index}
              favorited={true}
              onFavorite={onAddToFavorite}
              {...item}
            />
          ))}
        </div>
      ) : (
        <Info
          title="Закладок нет :("
          description="Вы ничего не добавляли в закладки"
          image="img/sad-fav.svg"   // ✔ исправлено!
        />
      )}
    </div>
  );
}

export default Favorites;
