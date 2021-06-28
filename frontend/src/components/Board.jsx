import React from 'react';
import '../assets/board.css';
import Column from './Column';
import { columns } from '../util/data';

const Board = () => {
  return (
    <div className="board-main">
      {columns.map((column) => {
        return <Column title={column.name} />;
      })}
    </div>
  );
};

export default Board;
