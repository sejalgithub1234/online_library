const initialState = {
  books: [
    { id: 1, title: 'Book 1', author: 'Author 1', category: 'Fiction', description: 'Description for Book 1', rating: 4 },
    { id: 2, title: 'Book 2', author: 'Author 2', category: 'Non-Fiction', description: 'Description for Book 2', rating: 5 },
  ],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return {
        ...state,
        books: [...state.books, { ...action.payload, id: state.books.length + 1 }],
      };
    default:
      return state;
  }
};

export default booksReducer;
