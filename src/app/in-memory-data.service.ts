import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const books = [
      { id: 1, name: 'The Lord Of The Rings', author: 'J. R. R. Tolkien'},
      { id: 2, name: 'The Handmaids Tale', author: 'Margaret Atwood' },
      { id: 3, name: 'Goodnight Stories for Rebel Girls', author: 'Elena Favilli and Francesca Cavallo' },
      { id: 4, name: 'Swing Time', author: 'Zadie Smith' },
      { id: 5, name: 'The Things You Can See', author: 'Haemin Sunim' },
      { id: 6, name: 'Sapiens', author: 'Yuval Noah Harari' },
      { id: 7, name: 'Into the Water', author: 'Paula Hawkins'},
      { id: 8, name: 'My Not So Perfect Life', author: 'Sophie Kinsella' },
      { id: 9, name: 'The Thirst', author: 'Jo Nesbo' },
      { id: 10, name: 'Nineteen Eighty-four', author: 'George Orwell' },
      { id: 11, name: 'Homegoing', author: 'Yaa Gyasi' },
      { id: 12, name: 'No Is Not Enough', author: 'Naomi Klein' }
    ];
    return {books};
  }
}
