import { useState } from 'react';
import { handleDragEnter } from '../util/dndHandler';

describe('DnD handler', () => {
  const mockEvent = { target: 1 };
  const mockGroupIndex = 0;
  const mockItemIndex = 0;

  const [list, setList] = useState([
    { title: 'todo', items: ['1', '2', '3'] },
    { title: 'in progress', items: ['4', '5', '6'] },
    { title: 'done', items: ['7', '8', '9'] },
  ]);

  

  it('test', () => {
    expect(handleDragEnter(mockEvent, { mockGroupIndex, mockItemIndex }, list, setList, dragItemNode));
  });
});
