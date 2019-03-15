import { Wishlist } from './wishlist.model';

const JsonWishlists = [
    {
        ownerName: 'Robbe',
        presents: ['laptop', 'fiets', 'tv'],
        dateAdded: new Date(2019, 2, 3)
    },
    {
        ownerName: 'Jarne',
        presents: ['bier', 'gin'],
        dateAdded: new Date(2019, 2, 5)
    }
];
export const WISHLISTS: Wishlist[] = JsonWishlists.map(Wishlist.fromJSON);