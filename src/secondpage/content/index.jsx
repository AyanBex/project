import { useState } from "react";
import swBusiness from "../../data/business.json";
import swBirthday from "../../data/birthday.json";

import { ItemLists } from "../product-list";
import { ItemSpisok } from "../product-spisok";
import "./selector.css";

// jshint ignore:start

const Content = () => {
  const [selector, setSelector] = useState("products");
  const handleSelectorChange = (event) => {
    setSelector(event.target.value);
  };

  return (
    <div className="content-layout">
      <select
        value={selector}
        placeholder="Choose your path"
        className="select-item"
        onChange={handleSelectorChange}
      >
        <option>Business</option>
        <option>Birthday</option>
        <option>Contrast</option>
      </select>

      {selector === "bsproducts" &&
        swBusiness.map((bsproduct) => (
          <ItemLists key={bsproduct.name} item={bsproduct} type="bus">
            <ItemSpisok>{bsproduct.name}</ItemSpisok>
            <ItemSpisok>{bsproduct.type}</ItemSpisok>
          </ItemLists>
        ))}

      {selector === "btproducts" &&
        swBirthday.map((btproduct) => (
          <ItemLists key={btproduct.name} item={btproduct} type="birth">
            <ItemSpisok>{btproduct.name}</ItemSpisok>
            <ItemSpisok>{btproduct.type}</ItemSpisok>
          </ItemLists>
        ))}
    </div>
  );
};

export default Content;

// jshint ignore:end
