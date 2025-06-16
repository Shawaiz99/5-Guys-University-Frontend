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
  // you can add here more slices (properties in the object) - user, theme, etc...
  books: [
    {
      id: 1,
      title: "The Great Gatsby",
      description:
        "A novel set in the Jazz Age that explores themes of wealth, love, and the American Dream.",
      isbn: "9780141182635",
      genre: "Classic",
      publication_year: 1925,
      publisher: "Charles Scribner's Sons",
      pages: 180,
      rating: 4.4,
      price: 14.99,
      availabilaty_status: "Available",
      quantity: 12,
      author_id: 1,
      cover_image_url:
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date_added: "2025-06-12T01:30:00Z",
      created_at: "2025-06-12T01:30:00Z",
      updated_at: "2025-06-12T01:30:00Z",
    },
    {
      id: 2,
      title: "The Ayaz",
      description:
        "A novel set in the Jazz Age that explores themes of wealth, love, and the American Dream.",
      isbn: "9780141182636",
      genre: "Classic",
      publication_year: 1925,
      publisher: "Charles Scribner's Sons",
      pages: 180,
      rating: 4.4,
      price: 14.99,
      availabilaty_status: "Available",
      quantity: 12,
      author_id: 3,
      cover_image_url:
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.com/images/great-gatsby.jpg",
      date_added: "2025-06-12T01:30:00Z",
      created_at: "2025-06-12T01:30:00Z",
      updated_at: "2025-06-12T01:30:00Z",
    },
    {
      id: 3,
      title: "Martin eden",
      description:
        "A novel set in the Jazz Age that explores themes of wealth, love, and the American Dream.",
      isbn: "9780141182636",
      genre: "Classic",
      publication_year: 1925,
      publisher: "Charles Scribner's Sons",
      pages: 180,
      rating: 4.4,
      price: 14.99,
      availabilaty_status: "Available",
      quantity: 12,
      author_id: 4,
      cover_image_url:
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date_added: "2025-06-12T01:30:00Z",
      created_at: "2025-06-12T01:30:00Z",
      updated_at: "2025-06-12T01:30:00Z",
    },
    {
      id: 4,
      title: "The Great Gatsby",
      description:
        "A novel set in the Jazz Age that explores themes of wealth, love, and the American Dream.",
      isbn: "9780141182636",
      genre: "Classic",
      publication_year: 1925,
      publisher: "Charles Scribner's Sons",
      pages: 180,
      rating: 4.4,
      price: 14.99,
      availabilaty_status: "Available",
      quantity: 12,
      author_id: 5,
      cover_image_url:
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date_added: "2025-06-12T01:30:00Z",
      created_at: "2025-06-12T01:30:00Z",
      updated_at: "2025-06-12T01:30:00Z",
    },
    {
      id: 5,
      title: "The Great Gatsby",
      description:
        "A novel set in the Jazz Age that explores themes of wealth, love, and the American Dream.",
      isbn: "9780141182636",
      genre: "Classic",
      publication_year: 1925,
      publisher: "Charles Scribner's Sons",
      pages: 180,
      rating: 4.4,
      price: 14.99,
      availabilaty_status: "Available",
      quantity: 12,
      author_id: 5,
      cover_image_url:
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date_added: "2025-06-12T01:30:00Z",
      created_at: "2025-06-12T01:30:00Z",
      updated_at: "2025-06-12T01:30:00Z",
    },
    {
      id: 6,
      title: "The Great Gatsby",
      description:
        "A novel set in the Jazz Age that explores themes of wealth, love, and the American Dream.",
      isbn: "9780141182636",
      genre: "Classic",
      publication_year: 1925,
      publisher: "Charles Scribner's Sons",
      pages: 180,
      rating: 4.4,
      price: 14.99,
      availabilaty_status: "Available",
      quantity: 12,
      author_id: 6,
      cover_image_url:
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date_added: "2025-06-12T01:30:00Z",
      created_at: "2025-06-12T01:30:00Z",
      updated_at: "2025-06-12T01:30:00Z",
    },
    {
      id: 7,
      title: "The Great Gatsby",
      description:
        "A novel set in the Jazz Age that explores themes of wealth, love, and the American Dream.",
      isbn: "9780141182636",
      genre: "Classic",
      publication_year: 1925,
      publisher: "Charles Scribner's Sons",
      pages: 180,
      rating: 4.4,
      price: 14.99,
      availabilaty_status: "Available",
      quantity: 12,
      author_id: 7,
      cover_image_url:
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date_added: "2025-06-12T01:30:00Z",
      created_at: "2025-06-12T01:30:00Z",
      updated_at: "2025-06-12T01:30:00Z",
    },
    {
      id: 8,
      title: "The Great Gatsby",
      description:
        "A novel set in the Jazz Age that explores themes of wealth, love, and the American Dream.",
      isbn: "9780141182636",
      genre: "Classic",
      publication_year: 1925,
      publisher: "Charles Scribner's Sons",
      pages: 180,
      rating: 4.4,
      price: 14.99,
      availabilaty_status: "Available",
      quantity: 12,
      author_id: 8,
      cover_image_url:
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date_added: "2025-06-12T01:30:00Z",
      created_at: "2025-06-12T01:30:00Z",
      updated_at: "2025-06-12T01:30:00Z",
    },
    {
      id: 9,
      title: "The Great Gatsby",
      description:
        "A novel set in the Jazz Age that explores themes of wealth, love, and the American Dream.",
      isbn: "9780141182636",
      genre: "Classic",
      publication_year: 1925,
      publisher: "Charles Scribner's Sons",
      pages: 180,
      rating: 4.4,
      price: 14.99,
      availabilaty_status: "Available",
      quantity: 12,
      author_id: 5,
      cover_image_url:
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date_added: "2025-06-12T01:30:00Z",
      created_at: "2025-06-12T01:30:00Z",
      updated_at: "2025-06-12T01:30:00Z",
    },
    {
      id: 10,
      title: "The Great Gatsby",
      description:
        "A novel set in the Jazz Age that explores themes of wealth, love, and the American Dream.",
      isbn: "9780141182636",
      genre: "Classic",
      publication_year: 1925,
      publisher: "Charles Scribner's Sons",
      pages: 180,
      rating: 4.4,
      price: 14.99,
      availabilaty_status: "Available",
      quantity: 12,
      author_id: 10,
      cover_image_url:
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date_added: "2025-06-12T01:30:00Z",
      created_at: "2025-06-12T01:30:00Z",
      updated_at: "2025-06-12T01:30:00Z",
    },
  ],
  authors: [
    {
      id: 1,
      name: "F. Scott Fitzgerald",
      biography:
        "An American novelist and short story writer, widely regarded as one of the greatest American writers of the 20th century.",
      photo_url:
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "J.K. Rowling",
      biography:
        "A British novelist and screenwriter, known for her fantasy novels and the Harry Potter series.",
      photo_url:
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "J.R.R. Tolkien",
      biography:
        "A British novelist and screenwriter, known for his fantasy novels and the Lord of the Rings series.",
      photo_url:
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Jane Austen",
      biography:
        "A British novelist and novelist, known for her classic novels and the Pride and Prejudice series.",
      photo_url:
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "Agatha Christie",
      biography:
        "A British novelist and novelist, known for her classic novels and the Pride and Prejudice series.",
      photo_url:
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      name: "Mark Twain",
      biography:
        "An American novelist and novelist, known for his classic novels and the Pride and Prejudice series.",
      photo_url:
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      name: "Charles Dickens",
      biography:
        "An American novelist and novelist, known for his classic novels and the Pride and Prejudice series.",
      photo_url:
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      name: "Emily Bronte",
      biography:
        "An American novelist and novelist, known for her classic novels and the Pride and Prejudice series.",
      photo_url:
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 9,
      name: "Emily Bronte",
      biography:
        "An American novelist and novelist, known for her classic novels and the Pride and Prejudice series.",
      photo_url:
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 10,
      name: "George Orwell",
      biography:
        "An English novelist and journalist, known for his dystopian novels and the Animal Farm series.",
      photo_url:
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
});
