import { isNotLastList } from '../js/appLogic';

test('first test', () => {
  expect(
    isNotLastList(
      [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
      0
    )
  ).toBe(true);
});
