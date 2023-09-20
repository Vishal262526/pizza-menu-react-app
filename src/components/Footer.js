import React from "react";

const Footer = () => {
  const hour = new Date().getHours();
  //   const [status, setStatus] = useState("");

  const openHour = 10;
  const closeHour = 24;

  const isOpen = hour >= openHour && hour < closeHour;
  console.log(isOpen);

  return (
    <footer>
      {isOpen ? (
        <div>
          <p>we're open until {closeHour}:00. Come visit us or order online </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 to {closeHour}:00
        </p>
      )}
    </footer>
  );
};

export default Footer;
