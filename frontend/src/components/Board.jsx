import React, { useState } from 'react';
import '../assets/board.scss';
import Columns from './Columns';

const Board = () => {
  const [list, setList] = useState([
    { title: 'todo', items: ['1', '2', '3'] },
    { title: 'in progress', items: ['4', '5', '6'] },
    { title: 'done', items: ['7', '8', '9'] },
  ]);
  return (
    <div className="board-main">
      <Columns list={list} setList={setList} />
    </div>
  );
};

export default Board;
