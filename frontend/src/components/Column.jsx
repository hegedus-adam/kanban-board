import React, { useState, useRef } from 'react';
import Card from './Card';

const Column = ({ title }) => {
  const draggingItem = useRef();
  const dragOverItem = useRef();

  const [list, setList] = useState(['1', '2s', '3', '4']);

  const handleDragStart = (e, position) => {
    draggingItem.current = position;
  };

  const handleDragEnter = (e, position) => {
    dragOverItem.current = position;
    const listCopy = [...list];
    const draggingItemContent = listCopy[draggingItem.current];

    listCopy.splice(draggingItem.current, 1);
    listCopy.splice(dragOverItem.current, 0, draggingItemContent);

    draggingItem.current = dragOverItem.current;
    dragOverItem.current = null;
    setList(listCopy);
  };
  return (
    <div className="card" id="column">
      <div className="column-header">
        <h2>
          <strong>{title}</strong>
        </h2>
      </div>
      {list.map((item, index) => {
        return (
          <div
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={(e) => handleDragEnter(e, index)}
            key={item}
            draggable
          >
            <Card name={item} key={item} />
          </div>
        );
      })}
    </div>
  );
};

export default Column;
