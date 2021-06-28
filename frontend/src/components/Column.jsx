import React from 'react';
import Card from './Card';
import { cards } from '../util/data';

const Column = ({ title }) => {
  return (
    <div class="card" id="column">
      <div className="column-header">
        <h2>
          <strong>{title}</strong>
        </h2>
        <button>---</button>
      </div>
      {cards.map((card) => {
        return <Card name={card.name} />;
      })}
    </div>
  );
};

export default Column;
