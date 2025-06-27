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

// Define authors and books first

export const authors = [
  {
    id: "author1",
    name: "J.K. Rowling",
    biography:
      "Joanne Rowling, better known as J.K. Rowling, is a British author, philanthropist, film producer, and screenwriter best known for writing the Harry Potter fantasy series.",
    photo_url:
      "https://images.pexels.com/photos/7034121/pexels-photo-7034121.jpeg?auto=compress&cs=tinysrgb&h=350",
    books: ["book1", "book2"],
  },
  {
    id: "author2",
    name: "George Orwell",
    biography:
      "Eric Arthur Blair, known by his pen name George Orwell, was an English novelist, essayist, journalist, and critic. His work is characterized by lucid prose, biting social criticism, and awareness of social injustice.",
    photo_url:
      "https://images.pexels.com/photos/4170629/pexels-photo-4170629.jpeg?auto=compress&cs=tinysrgb&h=350",
    books: ["book3"],
  },
  {
    id: "author3",
    name: "Jane Austen",
    biography:
      "Jane Austen was an English novelist known primarily for her six major novels, which interpret, critique and comment upon the British landed gentry at the end of the 18th century.",
    photo_url:
      "https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&h=350",
    books: ["book4"],
  },
  {
    id: "author4",
    name: "Yuval Noah Harari",
    biography:
      "Yuval Noah Harari is an Israeli public intellectual, historian, and professor. He is known for his books Sapiens: A Brief History of Humankind, Homo Deus: A Brief History of Tomorrow, and 21 Lessons for the 21st Century.",
    photo_url:
      "https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg?auto=compress&cs=tinysrgb&h=350",
    books: ["book5"],
  },
  {
    id: "author8",
    name: "Mark Twain",
    biography:
      "Samuel Langhorne Clemens, known by his pen name Mark Twain, was an American writer, humorist, entrepreneur, publisher, and lecturer.",
    photo_url:
      "https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&cs=tinysrgb&h=350",
    books: ["book9"],
  },
  {
    id: "author9",
    name: "Mary Shelley",
    biography:
      "Mary Wollstonecraft Shelley was an English novelist who wrote the Gothic novel Frankenstein.",
    photo_url:
      "https://images.pexels.com/photos/1707829/pexels-photo-1707829.jpeg?auto=compress&cs=tinysrgb&h=350",
    books: ["book10"],
  },
  {
    id: "author10",
    name: "Ernest Hemingway",
    biography:
      "Ernest Miller Hemingway was an American novelist, short-story writer, and journalist.",
    photo_url:
      "https://images.pexels.com/photos/1707830/pexels-photo-1707830.jpeg?auto=compress&cs=tinysrgb&h=350",
    books: ["book11"],
  },
  {
    id: "author11",
    name: "Charlotte Brontë",
    biography:
      "Charlotte Brontë was an English novelist and poet, the eldest of the three Brontë sisters.",
    photo_url:
      "https://images.pexels.com/photos/1707831/pexels-photo-1707831.jpeg?auto=compress&cs=tinysrgb&h=350",
    books: ["book12"],
  },
  {
    id: "author12",
    name: "F. Scott Fitzgerald",
    biography:
      "Francis Scott Key Fitzgerald was an American fiction writer, whose works helped to illustrate the flamboyance and excess of the Jazz Age.",
    photo_url:
      "https://images.pexels.com/photos/1707832/pexels-photo-1707832.jpeg?auto=compress&cs=tinysrgb&h=350",
    books: ["book13"],
  },
  {
    id: "author13",
    name: "Aldous Huxley",
    biography:
      "Aldous Leonard Huxley was an English writer and philosopher, best known for his novel Brave New World.",
    photo_url:
      "https://images.pexels.com/photos/1707833/pexels-photo-1707833.jpeg?auto=compress&cs=tinysrgb&h=350",
    books: ["book14"],
  },
  {
    id: "author14",
    name: "J.D. Salinger",
    biography:
      "Jerome David Salinger was an American writer best known for his novel The Catcher in the Rye.",
    photo_url:
      "https://images.pexels.com/photos/1707834/pexels-photo-1707834.jpeg?auto=compress&cs=tinysrgb&h=350",
    books: ["book15"],
  },
  {
    id: "author15",
    name: "Emily Brontë",
    biography:
      "Emily Jane Brontë was an English novelist and poet who is best known for her only novel, Wuthering Heights.",
    photo_url:
      "https://images.pexels.com/photos/1707835/pexels-photo-1707835.jpeg?auto=compress&cs=tinysrgb&h=350",
    books: ["book16"],
  },
  {
    id: "author16",
    name: "Oscar Wilde",
    biography:
      "Oscar Fingal O'Flahertie Wills Wilde was an Irish poet and playwright.",
    photo_url:
      "https://images.pexels.com/photos/1707836/pexels-photo-1707836.jpeg?auto=compress&cs=tinysrgb&h=350",
    books: ["book17"],
  },
  {
    id: "author17",
    name: "Arthur Conan Doyle",
    biography:
      "Sir Arthur Ignatius Conan Doyle was a British writer and physician, most noted for creating Sherlock Holmes.",
    photo_url:
      "https://images.pexels.com/photos/1707837/pexels-photo-1707837.jpeg?auto=compress&cs=tinysrgb&h=350",
    books: ["book18"],
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
  {
    id: "book9",
    title: "The Adventures of Tom Sawyer",
    author: authors[7],
    coverImage:
      "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&h=350",
    description:
      "A classic novel about the adventures of a young boy growing up along the Mississippi River.",
    isbn: "9780143039563",
    publicationYear: 1876,
    publisher: "American Publishing Company",
    pages: 274,
    genres: ["Classic", "Adventure", "Fiction"],
    language: "English",
    rating: 4.2,
    availability: { status: "available", copies: 10, availableCopies: 6 },
    price: 13.99,
  },
  {
    id: "book10",
    title: "Frankenstein",
    author: authors[8],
    coverImage:
      "https://images.pexels.com/photos/46275/pexels-photo-46275.jpeg?auto=compress&cs=tinysrgb&h=350",
    description:
      "Mary Shelley's classic Gothic novel about Victor Frankenstein and his monstrous creation.",
    isbn: "9780141439471",
    publicationYear: 1818,
    publisher: "Lackington, Hughes, Harding, Mavor & Jones",
    pages: 280,
    genres: ["Classic", "Gothic", "Science Fiction"],
    language: "English",
    rating: 4.1,
    availability: { status: "available", copies: 8, availableCopies: 4 },
    price: 12.99,
  },
  {
    id: "book11",
    title: "The Old Man and the Sea",
    author: authors[9],
    coverImage: "https://upload.wikimedia.org/wikipedia/en/7/73/Oldmansea.jpg",
    description:
      "A short novel by Ernest Hemingway about an aging fisherman and his struggle with a giant marlin.",
    isbn: "9780684801223",
    publicationYear: 1952,
    publisher: "Charles Scribner's Sons",
    pages: 127,
    genres: ["Classic", "Fiction", "Literature"],
    language: "English",
    rating: 4.0,
    availability: { status: "available", copies: 7, availableCopies: 5 },
    price: 11.99,
  },
  {
    id: "book12",
    title: "Jane Eyre",
    author: authors[10],
    coverImage:
      "https://images.pexels.com/photos/46277/pexels-photo-46277.jpeg?auto=compress&cs=tinysrgb&h=350",
    description:
      "A novel by Charlotte Brontë, following the experiences of its eponymous heroine.",
    isbn: "9780142437209",
    publicationYear: 1847,
    publisher: "Smith, Elder & Co.",
    pages: 500,
    genres: ["Classic", "Romance", "Fiction"],
    language: "English",
    rating: 4.4,
    availability: { status: "available", copies: 9, availableCopies: 7 },
    price: 14.99,
  },
  {
    id: "book13",
    title: "Tender Is the Night",
    author: authors[11],
    coverImage: "https://m.media-amazon.com/images/I/81j3ECeg0QL.jpg",
    description:
      "A novel by F. Scott Fitzgerald set in the French Riviera during the 1920s.",
    isbn: "9780684801544",
    publicationYear: 1934,
    publisher: "Charles Scribner's Sons",
    pages: 317,
    genres: ["Classic", "Fiction", "Literature"],
    language: "English",
    rating: 4.0,
    availability: { status: "available", copies: 6, availableCopies: 4 },
    price: 13.49,
  },
  {
    id: "book14",
    title: "Brave New World",
    author: authors[12],
    coverImage:
      "https://images.pexels.com/photos/46279/pexels-photo-46279.jpeg?auto=compress&cs=tinysrgb&h=350",
    description: "A dystopian social science fiction novel by Aldous Huxley.",
    isbn: "9780060850524",
    publicationYear: 1932,
    publisher: "Chatto & Windus",
    pages: 311,
    genres: ["Dystopian", "Science Fiction", "Classic"],
    language: "English",
    rating: 4.2,
    availability: { status: "available", copies: 10, availableCopies: 8 },
    price: 15.99,
  },
  {
    id: "book15",
    title: "The Catcher in the Rye",
    author: authors[13],
    coverImage:
      "https://images.pexels.com/photos/46280/pexels-photo-46280.jpeg?auto=compress&cs=tinysrgb&h=350",
    description:
      "A novel by J.D. Salinger, partially published in serial form in 1945–1946.",
    isbn: "9780316769488",
    publicationYear: 1951,
    publisher: "Little, Brown and Company",
    pages: 277,
    genres: ["Classic", "Fiction", "Young Adult"],
    language: "English",
    rating: 3.9,
    availability: { status: "available", copies: 12, availableCopies: 9 },
    price: 13.99,
  },
  {
    id: "book16",
    title: "Wuthering Heights",
    author: authors[14],
    coverImage:
      "https://images.pexels.com/photos/46281/pexels-photo-46281.jpeg?auto=compress&cs=tinysrgb&h=350",
    description:
      "A novel by Emily Brontë, published in 1847 under the pseudonym Ellis Bell.",
    isbn: "9780141439556",
    publicationYear: 1847,
    publisher: "Thomas Cautley Newby",
    pages: 416,
    genres: ["Classic", "Romance", "Gothic"],
    language: "English",
    rating: 4.1,
    availability: { status: "available", copies: 8, availableCopies: 6 },
    price: 12.99,
  },
  {
    id: "book17",
    title: "The Picture of Dorian Gray",
    author: authors[15],
    coverImage:
      "https://images.pexels.com/photos/46282/pexels-photo-46282.jpeg?auto=compress&cs=tinysrgb&h=350",
    description:
      "A philosophical novel by Oscar Wilde, first published in 1890.",
    isbn: "9780141439570",
    publicationYear: 1890,
    publisher: "Lippincott's Monthly Magazine",
    pages: 254,
    genres: ["Classic", "Philosophy", "Fiction"],
    language: "English",
    rating: 4.3,
    availability: { status: "available", copies: 7, availableCopies: 5 },
    price: 11.99,
  },
  {
    id: "book18",
    title: "The Adventures of Sherlock Holmes",
    author: authors[16],
    coverImage:
      "https://images.pexels.com/photos/46283/pexels-photo-46283.jpeg?auto=compress&cs=tinysrgb&h=350",
    description:
      "A collection of twelve short stories by Arthur Conan Doyle, featuring his fictional detective Sherlock Holmes.",
    isbn: "9780141034355",
    publicationYear: 1892,
    publisher: "George Newnes",
    pages: 307,
    genres: ["Mystery", "Classic", "Short Stories"],
    language: "English",
    rating: 4.5,
    availability: { status: "available", copies: 11, availableCopies: 9 },
    price: 14.99,
  },
];

// Now define the initialState function and include wishlist inside the returned object
export const initialState = () => ({
  user: {
    error: null,
    isAuthenticated: false,
    user: null,
    token: null,
    loading: false,
  },
  authors,
  books,
  wishlist: [
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
  ],
  cart: [
    {
      id: "book3",
      title: "1984",
      author: authors[1],
      coverImage:
        "https://images.pexels.com/photos/267586/pexels-photo-267586.jpeg?auto=compress&cs=tinysrgb&h=350",
      price: 19.99,
    },
    {
      id: "book4",
      title: "Pride and Prejudice",
      author: authors[2],
      coverImage:
        "https://images.pexels.com/photos/1148399/pexels-photo-1148399.jpeg?auto=compress&cs=tinysrgb&h=350",
      price: 15.99,
    },
    {
      id: "book5",
      title: "The Great Gatsby",
      author: authors[3],
      coverImage:
        "https://images.pexels.com/photos/164977/pexels-photo-164977.jpeg?auto=compress&cs=tinysrgb&h=350",
      price: 14.99,
    },
  ],
  library: [
    {
      id: "book6",
      title: "To Kill a Mockingbird",
      author: authors[4],
      coverImage:
        "https://images.pexels.com/photos/3747279/pexels-photo-3747279.jpeg?auto=compress&cs=tinysrgb&h=350",
      price: 18.99,
      checkedOutDate: "2023-10-01",
      dueDate: "2023-10-15",
    },
    {
      id: "book7",
      title: "The Hobbit",
      author: authors[5],
      coverImage:
        "https://images.pexels.com/photos/3747279/pexels-photo-3747279.jpeg?auto=compress&cs=tinysrgb&h=350",
      price: 18.99,
      checkedOutDate: "2023-10-01",
      dueDate: "2023-10-15",
    },
  ],
});
