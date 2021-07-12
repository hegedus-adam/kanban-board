export const handleDragEnter = (e, targetItem, dragItem, list, setList, dragItemNode) => {
  const newList = [...list];
  const { groupIndex: targetGroupIndex, itemIndex: targetItemIndex } = targetItem;
  const { groupIndex: grabbedItemGroupIndex, itemIndex: grabbedItemIndex } = dragItem.current;

  if (dragItemNode.current !== e.target && grabbedItemGroupIndex === targetGroupIndex) {
    console.log(dragItemNode.current);
    const tmp = newList[targetGroupIndex].items[targetItemIndex];
    newList[targetGroupIndex].items[targetItemIndex] = newList[grabbedItemGroupIndex].items[grabbedItemIndex];
    newList[grabbedItemGroupIndex].items[grabbedItemIndex] = tmp;
  } else {
    newList[targetGroupIndex].items.unshift(newList[grabbedItemGroupIndex].items[grabbedItemIndex]);
    newList[grabbedItemGroupIndex].items.splice(grabbedItemIndex, 1);
  }
  dragItem.current = targetItem;
  setList(newList);
};
