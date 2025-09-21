import { map } from 'nanostores';

// Using a map to hold related state values
// This makes it easier to manage and update them together
export const pagination = map({
    currentPage: 1,
    totalPages: 1,
});