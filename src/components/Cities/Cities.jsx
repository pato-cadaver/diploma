import "./Cities.scss";

function Cities(props) {
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

  return (
    <div className="cities-list">
      {cities.map((city) => {
        return (
          <a
            className={"city" + (props.currentCity === city.id ? "active" : "")}
            href="#"
            onClick={() => {
              //change currentCity
              props.onChange(city.id);
            }}
          >
            {city.title}
          </a>
        );
      })}
    </div>
  );
}

export default Cities;
