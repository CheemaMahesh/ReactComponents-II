import React, { Component } from "react";

const ListItem = (props) => {
  console.log(props.value);
  
  return (
    <div
      className="ListItem"
      style={{
        height: 30
      }}
    >
      <img src={props.value.icon} alt={props.value.name}/>
      <a href={props.value.link}>{props.value.name}</a>
    </div>
  );
};

export default ListItem;
