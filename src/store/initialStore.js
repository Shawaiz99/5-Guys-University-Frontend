/**
 * @file initialState.js
 * @description This file defines the initial state of the application store in a Flux architecture.
 * The initial state is an object that holds the default values for the application's state.
 * It is used by the store to initialize its state and can be referenced throughout the application
 * to reset or compare the current state.
 *
 * The initial state object for the Redux store.
 *
 * This object defines the default state of the application before any actions are dispatched.
 *
 * Usage:
 * - Import this initialState object into your store configuration.
 * - Use it to set up the default state for your reducers.
 *
 * What is a slice:
 * - A slice is a portion of the initial state that is managed by a specific reducer.
 * - Each slice typically corresponds to a specific feature or domain in your application.
 *
 * How to adjust for your needs:
 * - Add properties to this object to define the initial state for different slices of your application.
 * - Ensure that each property corresponds to a slice managed by a reducer.
 *
 * @example:
 * const initialState = {
 *   user: {
 *     isAuthenticated: false,
 *     details: null,
 *   },
 *   posts: {
 *     list: []
 *   },
 * };
 *
 * @author dmytro-ch21
 */
export const initialState = () => ({
  // demo for todos - replace with your needed state
  todos: [
    {
      id: "1",
      title: "This comes from your global store, delete it!",
      completed: false,
    },
  ],
  user: {
    isAuthenticated: false,
    userId: 1,
  },
  authors,
  books,
});

export const authors = [
  {
    id: "author1",
    name: "J.K. Rowling",
    bio: "Joanne Rowling, better known as J.K. Rowling, is a British author, philanthropist, film producer, and screenwriter best known for writing the Harry Potter fantasy series.",
    photo:
      "https://images.pexels.com/photos/7034121/pexels-photo-7034121.jpeg?auto=compress&cs=tinysrgb&h=350",
    books: ["book1", "book2"],
  },
  {
    id: "author2",
    name: "George Orwell",
    bio: "Eric Arthur Blair, known by his pen name George Orwell, was an English novelist, essayist, journalist, and critic. His work is characterized by lucid prose, biting social criticism, and awareness of social injustice.",
    photo:
      "https://images.pexels.com/photos/4170629/pexels-photo-4170629.jpeg?auto=compress&cs=tinysrgb&h=350",
    books: ["book3"],
  },
  {
    id: "author3",
    name: "Jane Austen",
    bio: "Jane Austen was an English novelist known primarily for her six major novels, which interpret, critique and comment upon the British landed gentry at the end of the 18th century.",
    photo:
      "https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&h=350",
    books: ["book4"],
  },
  {
    id: "author4",
    name: "Yuval Noah Harari",
    bio: "Yuval Noah Harari is an Israeli public intellectual, historian, and professor. He is known for his books Sapiens: A Brief History of Humankind, Homo Deus: A Brief History of Tomorrow, and 21 Lessons for the 21st Century.",
    photo:
      "https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg?auto=compress&cs=tinysrgb&h=350",
    books: ["book5"],
  },
];

export const books = [
  {
    id: "book1",
    title: "Harry Potter and the Philosopher's Stone",
    author: authors[0],
    coverImage:
      "https://images.pexels.com/photos/3747279/pexels-photo-3747279.jpeg?auto=compress&cs=tinysrgb&h=350",
    description:
      "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry.",
    isbn: "9780747532743",
    publicationYear: 1997,
    publisher: "Bloomsbury",
    pages: 223,
    genres: ["Fantasy", "Young Adult", "Magic"],
    language: "English",
    rating: 4.8,
    availability: {
      status: "available",
      copies: 15,
      availableCopies: 3,
    },
    price: 24.99,
  },
  {
    id: "book2",
    title: "Harry Potter and the Chamber of Secrets",
    author: authors[0],
    coverImage:
      "https://images.pexels.com/photos/4655426/pexels-photo-4655426.jpeg?auto=compress&cs=tinysrgb&h=350",
    description:
      "Harry Potter's summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car! Back at Hogwarts School of Witchcraft and Wizardry for his second year, Harry hears strange whispers echo through empty corridors - and then the attacks start.",
    isbn: "9780747538486",
    publicationYear: 1998,
    publisher: "Bloomsbury",
    pages: 251,
    genres: ["Fantasy", "Young Adult", "Magic"],
    language: "English",
    rating: 4.7,
    availability: {
      status: "available",
      copies: 12,
      availableCopies: 5,
    },
    price: 24.99,
  },
  {
    id: "book3",
    title: "1984",
    author: authors[1],
    coverImage:
      "https://images.pexels.com/photos/267586/pexels-photo-267586.jpeg?auto=compress&cs=tinysrgb&h=350",
    description:
      "Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real. Published in 1949, the book offers political satirist George Orwell's nightmarish vision of a totalitarian, bureaucratic world and one poor stiff's attempt to find individuality.",
    isbn: "9780451524935",
    publicationYear: 1949,
    publisher: "Secker & Warburg",
    pages: 328,
    genres: ["Dystopian", "Classics", "Science Fiction"],
    language: "English",
    rating: 4.7,
    availability: {
      status: "checked-out",
      dueDate: "2023-06-15",
      copies: 10,
      availableCopies: 0,
    },
    price: 19.99,
  },
  {
    id: "book4",
    title: "Pride and Prejudice",
    author: authors[2],
    coverImage:
      "https://images.pexels.com/photos/1148399/pexels-photo-1148399.jpeg?auto=compress&cs=tinysrgb&h=350",
    description:
      'Since its immediate success in 1813, Pride and Prejudice has remained one of the most popular novels in the English language. Jane Austen called this brilliant work "her own darling child" and its vivacious heroine, Elizabeth Bennet, "as delightful a creature as ever appeared in print."',
    isbn: "9780486284736",
    publicationYear: 1813,
    publisher: "T. Egerton, Whitehall",
    pages: 279,
    genres: ["Classic", "Romance", "Fiction"],
    language: "English",
    rating: 4.5,
    availability: {
      status: "available",
      copies: 8,
      availableCopies: 3,
    },
    price: 15.99,
  },
  {
    id: "book5",
    title: "Sapiens: A Brief History of Humankind",
    author: authors[3],
    coverImage:
      "https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg?auto=compress&cs=tinysrgb&h=350",
    description:
      "In Sapiens, Dr. Yuval Noah Harari spans the whole of human history, from the very first humans to walk the earth to the radical – and sometimes devastating – breakthroughs of the Cognitive, Agricultural, and Scientific Revolutions.",
    isbn: "9780062316097",
    publicationYear: 2014,
    publisher: "Harper",
    pages: 443,
    genres: ["Non-fiction", "History", "Science"],
    language: "English",
    rating: 4.6,
    availability: {
      status: "available",
      copies: 12,
      availableCopies: 7,
    },
    price: 22.99,
  },
  {
    id: "book6",
    title: "The Great Gatsby",
    author: {
      id: "author5",
      name: "F. Scott Fitzgerald",
      bio: "Francis Scott Key Fitzgerald was an American fiction writer, whose works helped to illustrate the flamboyance and excess of the Jazz Age.",
      photo:
        "https://images.pexels.com/photos/7034632/pexels-photo-7034632.jpeg?auto=compress&cs=tinysrgb&h=350",
    },
    coverImage:
      "https://images.pexels.com/photos/3747268/pexels-photo-3747268.jpeg?auto=compress&cs=tinysrgb&h=350",
    description:
      "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, the novel depicts narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.",
    isbn: "9780743273565",
    publicationYear: 1925,
    publisher: "Charles Scribner's Sons",
    pages: 180,
    genres: ["Classic", "Fiction", "Literary Fiction"],
    language: "English",
    rating: 4.3,
    availability: {
      status: "available",
      copies: 10,
      availableCopies: 4,
    },
    price: 17.99,
  },
  {
    id: "book7",
    title: "To Kill a Mockingbird",
    author: {
      id: "author6",
      name: "Harper Lee",
      bio: "Harper Lee was an American novelist best known for her 1960 novel To Kill a Mockingbird. It won the 1961 Pulitzer Prize and has become a classic of modern American literature.",
      photo:
        "https://images.pexels.com/photos/6147455/pexels-photo-6147455.jpeg?auto=compress&cs=tinysrgb&h=350",
    },
    coverImage:
      "https://images.pexels.com/photos/3747508/pexels-photo-3747508.jpeg?auto=compress&cs=tinysrgb&h=350",
    description:
      'The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it. "To Kill A Mockingbird" became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic.',
    isbn: "9780446310789",
    publicationYear: 1960,
    publisher: "J. B. Lippincott & Co.",
    pages: 281,
    genres: ["Classic", "Fiction", "Historical Fiction"],
    language: "English",
    rating: 4.3,
    availability: {
      status: "reserved",
      copies: 12,
      availableCopies: 0,
    },
    price: 18.99,
  },
  {
    id: "book8",
    title: "The Hobbit",
    author: {
      id: "author7",
      name: "J.R.R. Tolkien",
      bio: "John Ronald Reuel Tolkien was an English writer, poet, philologist, and academic, best known as the author of the high fantasy works The Hobbit and The Lord of the Rings.",
      photo:
        "https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&h=350",
    },
    coverImage:
      "https://images.pexels.com/photos/6373305/pexels-photo-6373305.jpeg?auto=compress&cs=tinysrgb&h=350",
    description:
      "Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry or cellar. But his contentment is disturbed when the wizard Gandalf and a company of dwarves arrive on his doorstep one day to whisk him away on an adventure.",
    isbn: "9780547928227",
    publicationYear: 1937,
    publisher: "George Allen & Unwin",
    pages: 310,
    genres: ["Fantasy", "Fiction", "Adventure"],
    language: "English",
    rating: 4.7,
    availability: {
      status: "available",
      copies: 15,
      availableCopies: 8,
    },
    price: 21.99,
  },
];
