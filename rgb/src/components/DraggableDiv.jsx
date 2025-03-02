"use client";

import React, { useRef } from "react";
import Draggable from "react-draggable";

const DraggableDiv = ({ rgbStr }) => {
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef}>
      <div
        ref={nodeRef}
        className="w-40 h-40 text-white flex items-center justify-center rounded-lg shadow-lg cursor-move"
        style={{'backgroundColor': rgbStr, "opacity": "80%"}}
      >
        
      </div>
    </Draggable>
  );
};

export default DraggableDiv;
