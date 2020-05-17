const initialState = {
  articles: [],
  images: [],
};

const entityReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ARTICLES":
      let newArticles = action.payload.articles;
      return { ...state, articles: newArticles };

    case "FETCH_IMAGES":
      let newImages = action.payload.images;
      return { ...state, images: newImages };

    default:
      return state;
  }
};

export default entityReducer;
