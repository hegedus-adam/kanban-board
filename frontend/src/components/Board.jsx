import React, { useState, useRef } from 'react';
import '../assets/board.css';
import Column from './Column';

const Board = () => {
  const draggingItem = useRef();
  const dragOverItem = useRef();

  const [list, setList] = useState([
    'To Do',
    'In progress',
    'In review',
    'Done',
  ]);

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
    <div className="board-main">
      {list.map((item, index) => {
        return (
          <div
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={(e) => handleDragEnter(e, index)}
            key={item}
            draggable
          >
            <Column title={item} key={item} />
          </div>
        );
      })}
    </div>
  );
};

export default Board;
