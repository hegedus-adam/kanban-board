import React, { useState, useRef } from 'react';
import { handleDragEnter } from '../util/dndHandler';

function Columns({ list, setList }) {
  const [dragging, setDragging] = useState(false);
  const dragItem = useRef();
  const dragItemNode = useRef();

  const handleDragStart = (e, item) => {
    dragItemNode.current = e.target;
    dragItemNode.current.addEventListener('dragend', handleDragEnd);
    dragItem.current = item;

    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handleDragEnd = (e) => {
    setDragging(false);
    dragItem.current = null;
    dragItemNode.current.removeEventListener('dragend', handleDragEnd);
    dragItemNode.current = null;
  };
  const getClasses = (item) => {
    const { current: { groupIndex: dragItemGroupIndex, itemIndex: dragItemIndex } = {} } = dragItem;
    const { groupIndex, itemIndex } = item;

    return dragging && dragItemGroupIndex === groupIndex && dragItemIndex === itemIndex ? 'dnd-item current' : 'dnd-item';
  };

  if (list) {
    return (
      <>
        <div className="drag-n-drop">
          {list.map((group, groupIndex) => (
            <div
              key={group.title}
              onDragEnter={
                dragging && !group.items.length
                  ? (e) => handleDragEnter(e, { groupIndex, itemIndex: 0 }, dragItem, list, setList, dragItemNode)
                  : null
              }
              className="dnd-group"
            >
              <div className="dnd-column-title">
                <p>
                  <strong>{group.title}</strong>
                </p>
              </div>
              {group.items.map((item, itemIndex) => (
                <div
                  draggable
                  key={itemIndex}
                  onDragStart={(e) => handleDragStart(e, { groupIndex, itemIndex })}
                  onDragEnter={
                    dragging
                      ? (e) => {
                          handleDragEnter(e, { groupIndex, itemIndex }, dragItem, list, setList, dragItemNode);
                        }
                      : null
                  }
                  className={getClasses({ groupIndex, itemIndex })}
                >
                  <div className="dnd-title">
                    <p>
                      <strong>{item}</strong>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </>
    );
  } else {
    return null;
  }
}

export default Columns;
