export const fetcgArticlesAction = (articles) => ({
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
