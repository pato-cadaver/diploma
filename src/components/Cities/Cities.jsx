import "./Cities.scss";

function Cities() {
  const cities = [
    {
      id: 1,
      title: "Город1",
    },
    {
      id: 2,
      title: "Город2",
    },
    {
      id: 3,
      title: "Город3",
    },
  ];

  const currentCity = 2;

  return (
    <div className="cities-list">
      {cities.map((city: { id: number, title: string }) => {
        return (
          <a className={"city" + (currentCity === city.id ? "active" : "")} href="#">
            {city.title}
          </a>
        );
      })}
    </div>
  );
}

export default Cities;
