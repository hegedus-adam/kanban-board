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
    console.log('Drop target: ', targetItem);
    if (dragItemNode.current !== e.target) {
      console.log('old: ', list);

      // MAGIC - DONT TOUCH IT
      const newList = [...list];
      const tmp = newList[targetItem.grpI].items[targetItem.itemI];
      newList[targetItem.grpI].items[targetItem.itemI] =
        newList[dragItem.current.grpI].items[dragItem.current.itemI];
      newList[dragItem.current.grpI].items[dragItem.current.itemI] = tmp;

      dragItem.current = targetItem;
      console.log('new :', newList);
      setList(newList);
      console.log('original :', list);
    }
  };
  const handleDragEnd = (e) => {
    setDragging(false);
    dragItem.current = null;
    dragItemNode.current.removeEventListener('dragend', handleDragEnd);
    dragItemNode.current = null;
  };
  const getClasses = (item) => {
    if (
      dragItem.current.grpI === item.grpI &&
      dragItem.current.itemI === item.itemI
    ) {
      return 'dnd-item current';
    }
    return 'dnd-item';
  };

  if (list) {
    return (
      <div className="drag-n-drop">
        {list.map((grp, grpI) => (
          <div
            key={grp.title}
            onDragEnter={
              dragging && !grp.items.length
                ? (e) => handleDragEnter(e, { grpI, itemI: 0 })
                : null
            }
            className="dnd-group"
          >
            {grp.items.map((item, itemI) => (
              <div
                draggable
                key={itemI}
                onDragStart={(e) => handleDragStart(e, { grpI, itemI })}
                onDragEnter={
                  dragging
                    ? (e) => {
                        handleDragEnter(e, { grpI, itemI });
                      }
                    : null
                }
                className={dragging ? getClasses({ grpI, itemI }) : 'dnd-item'}
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
