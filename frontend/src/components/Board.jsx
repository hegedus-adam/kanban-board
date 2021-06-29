import React from 'react';
import '../assets/board.scss';
import Columns from './Columns';

const Board = () => {
  return (
    <div className="board-main">
      <Columns />
    </div>
  );
};

export default Board;
