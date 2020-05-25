export const fetchArticlesAction = (articles) => ({
  type: "FETCH_ARTICLES",
  payload: {
    articles: articles,
  },
});

export const fetchImagesAction = (images) => ({
  type: "FETCH_IMAGES",
  payload: {
    images: images,
  },
});
