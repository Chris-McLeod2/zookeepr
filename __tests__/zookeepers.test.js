const fs = require('fs');
const {
  filterByQuery,
  findById,
  createNewZookeeper,
  validateZookeeper
} = require('../lib/zookeepers.js');

jest.mock('fs');

test('create a zookeepr object', () => {
    const zookeeper = createNewZookeeper({ name: 'Darlene', id: 'jhgdja3ng2' }, animals);

    expect(zookeeper.name).toBe('Darlene');
    expect(zookeeper.id).toBe('jhgdja3ng2');
  });
  

  test('filters by query', () => {
    const zookeeper = [
      {
        id: '2',
        name: 'Raksha',
        age: 31,
        favoriteAnimal: 'penguin'
      },
      {
        id: '4',
        name: 'Noel',
        age: 24,
        favoriteAnimal: 'Lion'
      }
    ];
  
    const updatedzookeeper = filterByQuery({ age: 24 }, zookeeper);
  
    expect(updatedzookeeper.length).toEqual(1);
  });

  test('finds by id', () => {
    const startingZookepers = [
        {
            id: '3',
            name: 'Raksha',
            age: 31,
            favoriteAnimal: 'penguin'
          },
          {
            id: '4',
            name: 'Noel',
            age: 24,
            favoriteAnimal: 'Lion'
          }
    ];
  
    const result = findById('3', startingZookepers);
  
    expect(result.name).toBe('Rashka');
  });

  test('validates age', () => {
    const ValidZookeper = {
            id: '3',
            name: 'Raksha',
            age: 31,
            favoriteAnimal: 'penguin'
          }
  
    const invalidZookeeper =   {
        id: '4',
        name: 'Noel',
        age: '67',
        favoriteAnimal: 'Lion'
      }
  
    const result = validateZookeeper(ValidZookeeper);
    const result2 = validateZookeeper(invalidZookeeper);
  
    expect(result).toBe(true);
    expect(result2).toBe(false);
  });
  