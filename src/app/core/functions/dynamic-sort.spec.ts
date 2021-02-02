// export function dynamicSort(property: string) {
//   let sortOrder = 1;

import { dynamicSort } from './dynamic-sort';

//   if (property[0] === '-') {
//     sortOrder = -1;
//     property = property.substr(1);
//   }

//   return function (a: any, b: any) {
//     const result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
//     return result * sortOrder;
//   };
// }

describe('dynamicSort', () => {
  const mock = [
    { name: 'Test D', price: 4 },
    { name: 'Test B', price: 2 },
    { name: 'Test C', price: 3 },
    { name: 'Test C', price: 3 },
    { name: 'Test A', price: 1 },
  ];

  it('should order by name asc', () => {
    const expected = [
      { name: 'Test A', price: 1 },
      { name: 'Test B', price: 2 },
      { name: 'Test C', price: 3 },
      { name: 'Test C', price: 3 },
      { name: 'Test D', price: 4 },
    ];

    expect(mock.sort(dynamicSort('name'))).toEqual(expected);
  });
  it('should order by name desc', () => {
    const expected = [
      { name: 'Test D', price: 4 },
      { name: 'Test C', price: 3 },
      { name: 'Test C', price: 3 },
      { name: 'Test B', price: 2 },
      { name: 'Test A', price: 1 },
    ];

    expect(mock.sort(dynamicSort('-name'))).toEqual(expected);
  });
});
