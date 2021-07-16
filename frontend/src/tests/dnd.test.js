import { handleSwapBetweenGroup, handleMoveToOtherGroup } from '../util/dndHandler';

describe('Horizontal move', () => {
  const list = [
    { title: 'todo', items: ['1', '2', '3'] },
    { title: 'in progress', items: ['4', '5', '6'] },
    { title: 'done', items: ['7', '8', '9'] },
  ];

  describe('checks horizontal moves', () => {
    const newList = [...list];
    const expected = [
      { title: 'todo', items: ['2', '3'] },
      { title: 'in progress', items: ['1', '4', '5', '6'] },
      { title: 'done', items: ['7', '8', '9'] },
    ];

    it('should move 1 card from first column to second one', () => {
      expect(handleMoveToOtherGroup(newList, 1, 0, 0)).toEqual(expected);
    });

    it('should move the card back', () => {
      const moveBack = handleMoveToOtherGroup(list, 0, 1, 0);
      expect(moveBack).toEqual(newList);
    });

    it('should empty a column', () => {
      handleMoveToOtherGroup(list, 0, 1, 0);
      handleMoveToOtherGroup(list, 0, 1, 0);
      handleMoveToOtherGroup(list, 0, 1, 0);
      expect(list[1].items).toEqual([]);
    });

    it('should move 1 card back to the empty column', () => {
      handleMoveToOtherGroup(list, 1, 0, 0);
      console.log(list);
      expect(list[1].items).toEqual(['6']);
    });
  });
});

describe('Vertical move', () => {
  const list = [
    { title: 'todo', items: ['1', '2', '3'] },
    { title: 'in progress', items: ['4', '5', '6'] },
    { title: 'done', items: ['7', '8', '9'] },
  ];

  it('checks vertical moves', () => {
    const newList = [...list];
    handleSwapBetweenGroup(newList, 0, 1, 0, 0);
    expect(newList[0].items).toEqual(['2', '1', '3']);

    it('should move a card between 2 card', () => {
      handleSwapBetweenGroup(newList, 0, 2, 0, 1);
      expect(newList[0].items).toEqual(['2', '3', '1']);
    });

    it('should move the first card to last place', () => {
      handleSwapBetweenGroup(newList, 0, 0, 0, 2);

      expect(newList[0].items).toEqual(['1', '3', '2']);
    });

    it('should not change the order', () => {
      handleSwapBetweenGroup(newList, 0, 0, 0, 0);

      expect(newList[0].items).toEqual(['1', '3', '2']);
    });
  });
});
