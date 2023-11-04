import React from "react";

export const BackgroundPage: React.FC = () => {
  return (
    <div>
      background page config
      <ul>
        //TODO:
        <li>switch to react context for bg options</li>
        <li>add inputs for configuring everything</li>
        <li>
          style (OFF, static, random, breathing, matrix (going up down), tracing
          path)
        </li>
        <li>
          cellSize, gapX, gapY, spiralGap (if spiral mode), shouldFill,
          shouldStroke, opacities
        </li>
        cellSize: 30,
      </ul>
    </div>
  );
};
