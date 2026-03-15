import React from "react";
import "./collection.css"; // separate CSS file

function Collection() {
  const menuItems = [
    { name: "Phones", link: "/phones" },
    { name: "Laptops", link: "/laptops" },
    { name: "TV", link: "/tv" },
    { name: "Air Conditioner", link: "/ac" },
    { name: "Electronics", link: "/electronics" },
  ];

  return (
    <div className="collection-container">
      {menuItems.map((item, index) => (
        <a key={index} href={item.link} className="collection-item">
          {item.name}
        </a>
      ))}
    </div>
  );
}

export default Collection;