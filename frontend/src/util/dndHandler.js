export const handleSwapBetweenGroup = (newList, targetGroupIndex, targetItemIndex, grabbedItemGroupIndex, grabbedItemIndex) => {
  console.log('move vertically');
  const tmp = newList[targetGroupIndex].items[targetItemIndex];
  newList[targetGroupIndex].items[targetItemIndex] = newList[grabbedItemGroupIndex].items[grabbedItemIndex];
  newList[grabbedItemGroupIndex].items[grabbedItemIndex] = tmp;
  return newList;
};

export const handleMoveToOtherGroup = (newList, targetGroupIndex, grabbedItemGroupIndex, grabbedItemIndex) => {
  console.log('move horizontally');
  newList[targetGroupIndex].items.unshift(newList[grabbedItemGroupIndex].items[grabbedItemIndex]);
  newList[grabbedItemGroupIndex].items.splice(grabbedItemIndex, 1);
  return newList;
};
