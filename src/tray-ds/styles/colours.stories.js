import React from "react";
import * as colours from "./colourPalette";

export default { title: "Colour Palette" };

const coloursMap = Object.keys(colours).map(i => ({
  hex: colours[i],
  name: i,
}));

export const ColourPalette = () => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    {coloursMap.map(colour => (
      <div key={colour.hex} style={{ display: "inline-flex", }}>
        <div style={{ backgroundColor: colour.hex, height: "50x", width: "50px",  marginRight: "10px" }} />
        <p style={{ marginRight: "10px" }}>{colour.hex}</p>
        <p>{colour.name}</p>
      </div>
    ))}
  </div>
)