import Pizza from "./Pizza";

const Menu = () => {
  const data = [
    {
      imgUrl: "img/pizza 1.jpg",
      title: "Pizza 1",
      description: "This is a Pizza 1",
      inStock: true,
    },
    {
      imgUrl: "img/img 2.jpg",
      title: "Pizza 2",
      description: "This is a Pizza 1",
      inStock: true,
    },
    {
      imgUrl: "img/img 2.jpg",
      title: "Pizza 3",
      description: "This is a Pizza 2",
      inStock: true,
    },
    {
      imgUrl: "img/img 3.jpg",
      title: "Pizza 4",
      description: "This is a Pizza 3",
      inStock: false,
    },
    {
      imgUrl: "img/img 4.jpg",
      title: "Pizza 5",
      description: "This is a Pizza 4",
      inStock: true,
    },
    {
      imgUrl: "img/img 6.jpg",
      title: "Pizza 6",
      description: "This is a Pizza 5",
      inStock: false,
    },
    {
      imgUrl: "img/img 8.jpg",
      title: "Pizza 7",
      description: "This is a Pizza 6",
      inStock: true,
    },
  ];

  return (
    <div className="menu">
      <h2 className="menu-title">Our Menu</h2>
      <div className="items">
        {data.length > 0 &&
          data.map((currentPizzaData) => (
            <Pizza
              key={currentPizzaData.title}
              inStock={currentPizzaData.inStock}
              imageUrl={currentPizzaData.imgUrl}
              title={currentPizzaData.title}
              description={currentPizzaData.description}
            />
          ))}
      </div>
    </div>
  );
};

export default Menu;
