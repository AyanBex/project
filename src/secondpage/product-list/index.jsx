import { useContext } from "react";
import { DefaultContext } from "../../Context";
// jshint ignore:start

export const ItemLists = ({ item, children, type }) => {
  return (
    <div key={item.name} className="item-list-layout">
      <div className="item-image-layout">
        <img className="item-image" src={item.url} alt="asd" />
      </div>
      <div className="item-p-layout">
        <p className="item-p1">{item.name} </p>
        <p className="item-p2">{item.content}</p>
      </div>
    </div>
  );
};

// jshint ignore:end
