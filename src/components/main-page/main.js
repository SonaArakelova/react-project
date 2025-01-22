import React, { useState } from "react";
import Search from "../main-page/search-input"; 

const Item = ({ data: { id, category, title, thumbnail, price, quantity, } }) => {
  const lowQuantity = quantity;

  return (
    <div className="card">
      <div className="image">
        <img alt=" " src={thumbnail} />
      </div>
      <div className="card-content">
        <div className="content.header">{title}
        </div>
        <div className="price">
          <span>Price: {price}</span>
        </div>
        Quantity:
        <span 
          style={{ color: lowQuantity < 2 ? "red" : "" }}
          className={lowQuantity < 2 ? "lowinstorage" : "description "}
        >
          {lowQuantity}
        </span>
        <br />
        <span className="category">
           Category: {category}
          </span>

      </div>
      <div className="extracontent">ID: {id}</div>
    </div>
  );
};

export const Main = (props) => {
  const { items } = props;
  const [filteredItems, setFilteredItems] = useState(items); 

  const handleSearch = (query) => {
    const results = items.filter((item) =>
      item.category.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(results);
  };

  return (
    <div className="main">
      {/* Search Component  */}
      <Search onSearch={handleSearch} />

      {/* Filtered Items */}
      <div className="product-list">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => <Item data={item} key={item.id} />)
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};
