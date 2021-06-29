import React, { useState, useRef } from 'react';

function Columns() {
  const [list, setList] = useState([
    { title: 'group 1', items: ['1', '2', '3'] },
    { title: 'group 2', items: ['4', '5', '6'] },
  ]);

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

  const handleDragEnter = (e, targetItem) => {
    if (dragItemNode.current !== e.target) {
      const targetGroupIndex = targetItem.groupIndex;
      const targetItemIndex = targetItem.itemIndex;
      const grabbedItemGroupIndex = dragItem.current.groupIndex;
      const grabbedItemIndex = dragItem.current.itemIndex;

      //Swap items
      const newList = [...list];
      const tmp = newList[targetGroupIndex].items[targetItemIndex];
      newList[targetGroupIndex].items[targetItemIndex] = newList[grabbedItemGroupIndex].items[grabbedItemIndex];
      newList[grabbedItemGroupIndex].items[grabbedItemIndex] = tmp;

      dragItem.current = targetItem;
      setList(newList);
    }
  };
  const handleDragEnd = (e) => {
    setDragging(false);
    dragItem.current = null;
    dragItemNode.current.removeEventListener('dragend', handleDragEnd);
    dragItemNode.current = null;
  };
  const getClasses = (item) =>
    dragging && dragItem.current.groupIndex === item.groupIndex && dragItem.current.itemIndex === item.itemIndex
      ? 'dnd-item current'
      : 'dnd-item';

  if (list) {
    return (
      <div className="drag-n-drop">
        {list.map((group, groupIndex) => (
          <div
            key={group.title}
            onDragEnter={dragging && !group.items.length ? (e) => handleDragEnter(e, { groupIndex, itemIndex: 0 }) : null}
            className="dnd-group"
          >
            {group.items.map((item, itemIndex) => (
              <div
                draggable
                key={itemIndex}
                onDragStart={(e) => handleDragStart(e, { groupIndex, itemIndex })}
                onDragEnter={
                  dragging
                    ? (e) => {
                        handleDragEnter(e, { groupIndex, itemIndex });
                      }
                    : null
                }
                className={getClasses({ groupIndex, itemIndex })}
              >
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
}

export default Columns;
