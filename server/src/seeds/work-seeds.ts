import { Work } from '../models/index.js';

export const seedWork = async () => {
  await Work.bulkCreate([
    {
      name: 'Help the elderly', status: 'TODO', description: 'Help grandma cross the street', assignedCarId: 1
    },
    {
      name: 'Sell Lemonade', status: 'IN PROGRESS', description: 'Raise funds for Girl Scout', assignedCarId: 2
    },
    {
      name: 'Pick up groceries', status: 'DONE', description: 'Help out with groceries for the community', assignedCarId: 3
    },
    {
      name: 'Work at the soup kitchen', status: 'TODO', description: 'Help feed the homeless at the Soup Kitchen', assignedCarId: 4
    },
    {
      name: 'Mow lawn', status: 'IN PROGRESS', description: 'Head to the communities and mow lawns for people in need', assignedCarId: 2
    },
    {
      name: 'Take care of farm', status: 'DONE', description: 'feed the cows, pet the chickens, and sing with the pigs', assignedCarId: 3
    },
    {
      name: 'Dog walk', status: 'TODO', description: 'Walk the dogs and praise the cats!', assignedCarId: 4
    }
  ]);
};
