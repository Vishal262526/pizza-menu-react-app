const Pizza = ({ imageUrl, title, description, inStock }) => {
  if (!inStock) {
    return null;
  }

  return (
    <div className="pizza">
      <img src={imageUrl} alt={title} />
      <div>
        <h3 className="pizza-title">{title}</h3>
        <p className="pizza-description">{description}</p>
      </div>
    </div>
  );
};

export default Pizza;
