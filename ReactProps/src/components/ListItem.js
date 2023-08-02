import React, { Component } from "react";

// Complete this Component
const ListItem = (props) => {
  return (
    <div
      className="ListItem"
      style={{
        height: 30
      }}
    >
      <img src={props.data.icon} alt={props.data.name} />
      <a href={props.data.link}>{props.data.name}</a>
    </div>
  );
};

export default ListItem;
