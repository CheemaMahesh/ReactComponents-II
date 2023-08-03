import "./styles.css";
import React from "react";



export const Card = (bio) => (
  <div className="card">
    <h3>Name: {bio.name}</h3>
    <span>About: {bio.about}</span>
  </div>
);

export default function App() {
  return <Card name="Pranav" about="Hi, my name is Pranav Yeole." />;
}
