import { Wishlist } from './wishlist.model';
import { Present } from './present.model';

const JsonWishlists = [
    {
        ownerName: 'Robbe',
        presents: [new Present("laptop", 2000), new Present("fiets", 500)],
        dateAdded: new Date(2019, 2, 3)
    }
    /*,
    {
        ownerName: 'Jarne',
        presents: ['bier', 'gin'],
        dateAdded: new Date(2019, 2, 5)
    }*/
];
export const WISHLISTS: Wishlist[] = JsonWishlists.map(Wishlist.fromJSON);