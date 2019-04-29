import {
  isNotLastList,
  selectSources,
  isMoreDataExist,
  prepareAuthorName,
} from '../js/appLogic';

const list = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

describe('check isNotLastList function', () => {
  it('if previous page was first page', () => {
    expect(isNotLastList(list, 0)).toBe(true);
  });

  it('if previous page was last page', () => {
    expect(isNotLastList(list, 2)).toBeNull();
  });

  it('if first argument will be an empty array', () => {
    expect(isNotLastList([], 0)).toBeNull();
  });

  it('if will be only one arguments', () => {
    expect(isNotLastList(0)).toBeNull();
  });

  it('without arguments', () => {
    expect(isNotLastList()).toBeNull();
  });
});

describe('check selectSources function', () => {
  const minResult = [{}, {}, {}, {}, {}, {}, {}];

  it('if previous page was last page', () => {
    expect(selectSources(list, 0)).toEqual(minResult);
  });

  it('if previous page was last page', () => {
    expect(selectSources(list, 2).length).toBe(2);
  });

  it('if a page count more than pages', () => {
    expect(selectSources(list, 10)).toEqual([]);
  });

  it('if will be only one arguments', () => {
    expect(selectSources([])).toEqual([]);
    expect(selectSources(null)).toEqual([]);
  });

  it('without arguments', () => {
    expect(selectSources()).toEqual([]);
  });
});

describe('check selectSources function', () => {
  it('if dataCount more then quantity', () => {
    expect(isMoreDataExist(20, 10)).toBeTruthy();
  });

  it('if dataCount less then quantity', () => {
    expect(isMoreDataExist(10, 20)).toBeFalsy();
  });

  it('if quantity more then MAX_QUANTITY_NEWS or equal MAX_QUANTITY_NEWS', () => {
    expect(isMoreDataExist(50, 41)).toBeFalsy();
    expect(isMoreDataExist(50, 40)).toBeFalsy();
  });

  it('if will be only one arguments and without arguments', () => {
    expect(isMoreDataExist(10)).toBeFalsy();
    expect(isMoreDataExist()).toBeFalsy();
  });
});

describe('check selectSources function', () => {
  const shortName = 'John Lennon';
  const longName = 'Wolfgang Ernst Pauli Sir Isaac';

  it('if name is short ', () => {
    expect(prepareAuthorName(shortName)).toBe(shortName);
  });

  it('if name is long ', () => {
    expect(prepareAuthorName(longName)).toBe('Wolfgang Ernst Pauli...');
  });

  it('without arguments', () => {
    expect(prepareAuthorName()).toBe('unknown');
  });
});
