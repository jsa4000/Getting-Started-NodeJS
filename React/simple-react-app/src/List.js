import React from "react";
import "./List.css";

const List = () => {
  const items = [
    { text: "Item 6", description: "description 2" },
    { text: "Item 7", description: "description 7" },
    { text: "Item 8", description: "description 8" },
    { text: "Item 9", description: "description 9" },
    { text: "Item 10", description: "description 10" },
  ];
  return (
    <div className="List">
      <ListItem text="Item 1" description="description 1" />
      <ListItem text="Item 2" description="description 2" />
      <ListItem text="Item 3" description="description 3" />
      <ListItem text="Item 4" description="description 4" />
      <ListItem text="Item 5" description="description 5" />
      {items.map(item =>
        // key is needed to avoid warnings
        <ListItem key={item.text} text={item.text} description={item.description} />
      )}
    </div>
  );
};

// Props parameters (packed)
/*
const ListItem = (props) => {
  const {text, description } = props;
  return (
    <div className="ListItem">
      {text} - {description}
    </div>
  );
};
*/

// Props parameters as class
/*
const ListItem = (props) => {
  return (
    <div className="ListItem">
      {props.text} - {props.description}
    </div>
  );
};
*/

// Props parameters (unpacked arguments)
const ListItem = ({ text, description }) => {
  return (
    <div className="ListItem">
      {text} - {description}
    </div>
  );
};

export default List;
