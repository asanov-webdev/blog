import axios from "./axios-config";

export async function fetchArticles() {
  const data = await axios.get("/articles/").then(response => response.data);
  return data;
}

export async function fetchArticleById(articleId) {
  const data = await axios
    .get(`/articles/${articleId}`)
    .then(response => response.data);
  return data;
}

export async function fetchAllImages() {
  const data = await axios
    .get("/articles/images/")
    .then(response => response.data);
  return data;
}

export async function incrementArticleViews(article) {
  article.views_amount += 1;
  const data = await axios
    .put(`/articles/update/${article.id}`, article)
    .then(response => response.data);
  return data;
}

export async function editArticleContent(article, newContent) {
  article.content = newContent;
  const data = await axios
    .put(`/articles/update/${article.id}`, article)
    .then(response => response.data);
  return data;
}

export async function editArticleTitle(article, newTitle) {
  article.title = newTitle;
  const data = await axios
    .put(`/articles/update/${article.id}`, article)
    .then(response => response.data);
  return data;
}

export async function addImage(formData) {
  const data = await axios
    .post("/articles/images/add", formData, {
      headers: { "content-type": "multipart/form-data" }
    })
    .then(response => response.data);
  return data;
}
